"use strict";

module.exports = {
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    extensionService.use(({ strapi }) => ({
      typeDefs: `
        type Query {
          courseTemplate1ByCode(where: CourseTemplateWhereInput!): CourseTemplate1EntityResponse
          categoryWithCourses: [CategoryWithCourse]
          authorBySlug(where: AuthorWhereInput!): AuthorEntityResponse
          landingPageBySlug(where: landingPageWhereInput!): LandingPageEntityResponse
        }
        input CourseTemplateWhereInput {
          code: String!,
          isPreview : Boolean
        }
        input AuthorWhereInput {
          slug: String!
          isPreview: Boolean
        }
        input landingPageWhereInput {
          slug: String!
          isPreview: Boolean
        }
        type CategoryWithCourse {
          id : Int,
          name : String,
          code : String,
          imageUrl: String,
          imageName: String,
          order:String,
          courses : [CourseDetail]
        }
        type CourseDetail {
          id: Int,
          name: String,
          code: String,
          order:String,
          isBestSeller: String,
          isTrending: String,
          isRecommended: String,
          isPopular:String
          isNew:String
          imageUrl: String,
          imageName: String,
          logoUrl: String,
          logoName: String,
          globalAccreditationName: String
          durationInHrs : Int
          publishedAt: Date
        }
          
      `,
      resolvers: {
        Query: {
          courseTemplate1ByCode: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const { isPreview = false, code } = args?.where;
              const filters = { code: code };
              const publicationState = isPreview ? "preview" : "live";

              const data = await strapi.services[
                "api::course-template-1.course-template-1"
              ].find({
                filters,
                publicationState,
              });
              const response = toEntityResponse(data.results[0]);
              return response;
            },
          },
          categoryWithCourses: {
            resolve: async (parent, args, context) => {
              const query = `WITH RankedCourses AS (
                SELECT 
                    ca.*, 
                    ca.order AS category_order,
                    cfl.url AS category_image_url,
                    cfl.name AS category_image_name,
                    ct.heading AS courseName, 
                    ct.code AS courseCode,
                    ct.is_best_seller AS isBestSeller,
                    ct.is_trending AS isTrending,
                    ct.is_recommended AS isRecommended,
                    ct.is_popular AS isPopular,
                    ct.is_new AS isNew,
                    ct.duration_in_hrs,
                    ct.published_at AS course_published_at,
                    ct.order AS course_order,
                    fl.url AS course_image_url,
                    fl.name AS course_image_name,
                    fll.url AS course_logo_url,
                    fll.name AS course_logo_name,
                    ga.name AS global_accreditation_name,
                    ROW_NUMBER() OVER (PARTITION BY ca.id ORDER BY ct.order ASC) AS courseId
                FROM public.categories AS ca
                JOIN course_template_1_s_category_links AS cl 
                    ON cl.category_id = ca.id 
                JOIN course_template_1s AS ct  
                    ON ct.id = cl.course_template_1_id
                    AND ct.published_at IS NOT NULL
                LEFT JOIN course_template_1_s_global_accreditation_links AS cga  
                    ON ct.id = cga.course_template_1_id
                LEFT JOIN global_accreditations AS ga  
                    ON cga.global_accreditation_id = ga.id
                LEFT JOIN files_related_morphs AS frm 
                    ON frm.related_id = ct.id 
                    AND frm.related_type = 'api::course-template-1.course-template-1' 
                    AND frm.field = 'image'
                LEFT JOIN files AS fl 
                    ON frm.file_id = fl.id
                LEFT JOIN files_related_morphs AS frml 
                    ON frml.related_id = ct.id 
                    AND frml.related_type = 'api::course-template-1.course-template-1' 
                    AND frml.field = 'logo'
                LEFT JOIN files AS fll 
                    ON frml.file_id = fll.id
                LEFT JOIN files_related_morphs AS cfm 
                    ON cfm.related_id = ca.id 
                    AND cfm.related_type = 'api::category.category'
                LEFT JOIN files AS cfl 
                    ON cfm.file_id = cfl.id
                  WHERE ct.master_course IS NULL
            )
            SELECT * 
            FROM RankedCourses
            ORDER BY category_order ASC, course_order ASC;
            `;
              const result = await strapi.db.connection.context.raw(query);

              let formattedData = result?.rows?.reduce((acc, item) => {
                const {
                  id,
                  name,
                  code,
                  category_image_url,
                  category_image_name,
                  coursename,
                  coursecode,
                  isbestseller,
                  istrending,
                  isrecommended,
                  ispopular,
                  isnew,
                  courseid,
                  course_image_url,
                  course_image_name,
                  course_logo_url,
                  course_logo_name,
                  duration_in_hrs,
                  global_accreditation_name,
                  course_published_at,
                  category_order,
                  course_order,
                } = item;

                let category = acc.find((category) => category?.name === name);
                if (!category) {
                  category = {
                    id,
                    name,
                    code,
                    order: category_order,
                    imageUrl: category_image_url,
                    imageName: category_image_name,
                    courses: [],
                  };
                  acc.push(category);
                }
                category.courses.push({
                  id: courseid,
                  name: coursename,
                  code: coursecode,
                  order: course_order,
                  isBestSeller: isbestseller,
                  isTrending: istrending,
                  isRecommended: isrecommended,
                  isPopular: ispopular,
                  isNew: isnew,
                  imageUrl: course_image_url,
                  imageName: course_image_name,
                  logoUrl: course_logo_url,
                  logoName: course_logo_name,
                  globalAccreditationName: global_accreditation_name,
                  durationInHrs: duration_in_hrs,
                  publishedAt: course_published_at,
                });
                return acc;
              }, []);

              // Remove categories with 0 blogs
              formattedData = formattedData.filter(
                (category) => category?.courses?.length > 0
              );
              return formattedData;
            },
          },
          authorBySlug: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const { isPreview = false, slug } = args?.where;

              const filters = { slug: slug };
              const publicationState = isPreview ? "preview" : "live";

              const data = await strapi.services["api::author.author"].find({
                filters,
                publicationState,
              });

              const response = toEntityResponse(data.results[0]);
              return response;
            },
          },
          landingPageBySlug: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const { isPreview = false, slug } = args?.where;

              const filters = { slug: slug };
              const publicationState = isPreview ? "preview" : "live";

              const data = await strapi.services["api::landing-page.landing-page"].find({
                filters,
                publicationState,
              });

              const response = toEntityResponse(data.results[0]);
              return response;
            },
          },
        },
      },
      resolversConfig: {
        "Query.courseTemplate1ByCode": { auth: false },
        "Query.categoryWithCourses": { auth: false },
        "Query.authorBySlug": { auth: false },
        "Query.landingPageBySlug": { auth: false },
      },
    }));
  },
};
