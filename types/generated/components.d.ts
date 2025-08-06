import type { Schema, Struct } from '@strapi/strapi';

export interface AssessmentComponentsAssessmentCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_components_assessment_cate';
  info: {
    displayName: 'Assessment Categories';
  };
  attributes: {
    heading: Schema.Attribute.String;
    list: Schema.Attribute.Component<
      'assessment-components.highlight-block',
      true
    >;
  };
}

export interface AssessmentComponentsHighlightBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_components_highlight_blocks';
  info: {
    displayName: 'Highlight Block';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-with-icon', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
  };
}

export interface AssessmentComponentsServiceRequestCta
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_components_service_request';
  info: {
    displayName: 'Service Request CTA';
  };
  attributes: {
    customizedAssessmentsButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface AssessmentComponentsTailoredPlansDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_components_tailored_plans_';
  info: {
    displayName: 'Tailored Plans Details';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false>;
    isBestSeller: Schema.Attribute.Boolean;
    planFeatures: Schema.Attribute.Component<'component.icon-with-title', true>;
    planOverview: Schema.Attribute.Component<
      'blog-component.feature-with-icon',
      false
    >;
    price: Schema.Attribute.String;
  };
}

export interface AssessmentSectionHowToUseThePlatform
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_section_how_to_use_the';
  info: {
    description: '';
    displayName: 'How to Use the Platform';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'component.advantages', true>;
  };
}

export interface AssessmentSectionOnboardingSteps
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_section_onboarding_steps';
  info: {
    displayName: 'OnboardingSteps';
  };
  attributes: {
    getStartedButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'component.advantages', true>;
  };
}

export interface AssessmentSectionOurFeatures extends Struct.ComponentSchema {
  collectionName: 'components_assessment_section_our_features';
  info: {
    displayName: 'Our Features';
  };
  attributes: {
    featuresList: Schema.Attribute.Component<
      'component.cta-content-block',
      true
    >;
    heading: Schema.Attribute.String;
  };
}

export interface AssessmentSectionProvenPerformance
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_section_proven_performances';
  info: {
    description: '';
    displayName: 'Proven Performance';
  };
  attributes: {
    heading: Schema.Attribute.String;
    successMetrics: Schema.Attribute.Component<
      'component.title-with-description-2',
      true
    >;
  };
}

export interface AssessmentSectionTailoredAssessmentSolutions
  extends Struct.ComponentSchema {
  collectionName: 'components_assessment_section_assessment';
  info: {
    displayName: 'Tailored Assessment Solutions';
  };
  attributes: {
    categoryWiseSolutions: Schema.Attribute.Component<
      'assessment-components.assessment-categories',
      false
    >;
    heading: Schema.Attribute.String;
  };
}

export interface AssessmentSectionTailoredPlans extends Struct.ComponentSchema {
  collectionName: 'components_assessment_section_tailored_plans';
  info: {
    displayName: 'Tailored Plans';
  };
  attributes: {
    heading: Schema.Attribute.String;
    planDetails: Schema.Attribute.Component<
      'assessment-components.tailored-plans-details',
      false
    >;
    preHeading: Schema.Attribute.String;
  };
}

export interface BlogComponentButtonDetails extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_button_details';
  info: {
    displayName: 'Button Details';
  };
  attributes: {
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'href']>;
  };
}

export interface BlogComponentCodeTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_code_text_editors';
  info: {
    description: '';
    displayName: 'Rich Editor';
  };
  attributes: {
    code: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface BlogComponentFeature extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface BlogComponentFeatureWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_feature_with_icons';
  info: {
    description: '';
    displayName: 'Feature With Icon';
  };
  attributes: {
    feature: Schema.Attribute.String;
    featureTagline: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogComponentRecommendedCourseDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_recommended_course_details';
  info: {
    displayName: 'Recommended Course Details';
  };
  attributes: {
    deliveryType: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Classroom', 'Self Paced', 'Labs', 'Live Online Classroom']
      >;
    durationInHrs: Schema.Attribute.BigInteger;
    enrolledLearners: Schema.Attribute.BigInteger;
    exploreButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isBestSeller: Schema.Attribute.Boolean;
    isNew: Schema.Attribute.Boolean;
    isPopular: Schema.Attribute.Boolean;
    isRecommended: Schema.Attribute.Boolean;
    isTrending: Schema.Attribute.Boolean;
    viewAllAgileCourses: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface BlogComponentResourceDetails extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_resource_details';
  info: {
    displayName: 'Resource Details';
    icon: 'bell';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface BlogComponentSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'footer.social-links', true>;
  };
}

export interface BlogComponentTableOfContentItem
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_component_table_of_content_items';
  info: {
    displayName: 'Table Of Content Item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    redirectedUrl: Schema.Attribute.String;
  };
}

export interface BlogSectionBackgroundHighlightBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_background_highlight_blocks';
  info: {
    displayName: 'Background Highlight Block';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    name: Schema.Attribute.String;
  };
}

export interface BlogSectionBlogDefinition extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_blog_definitions';
  info: {
    description: '';
    displayName: 'Blog Definition';
  };
  attributes: {
    BlogDefinition: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    redirectedUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlogSectionComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_comparison_tables';
  info: {
    displayName: 'Comparison Table';
  };
  attributes: {
    comparison: Schema.Attribute.Component<
      'blog-section.comparison-table-details',
      true
    >;
    layoutType: Schema.Attribute.Enumeration<['PROS_CONS', 'GOAL_FOCUS']>;
  };
}

export interface BlogSectionComparisonTableDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_comparison_table_detials_s';
  info: {
    displayName: 'Comparison Table Details';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'blog-component.feature-with-icon',
      true
    >;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogSectionContentBanner extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_content_banners';
  info: {
    description: '';
    displayName: 'CTA Content Block ';
  };
  attributes: {
    button: Schema.Attribute.Component<'blog-component.button-details', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
    redirectedUrl: Schema.Attribute.String;
  };
}

export interface BlogSectionFreeGuideButton extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_free_guide_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    buttonDetail: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
  };
}

export interface BlogSectionHighlightBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_highlight_blocks';
  info: {
    displayName: 'Highlight Block';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface BlogSectionLearningResourse extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_learning_resourses';
  info: {
    displayName: 'Learning Resourse';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    resources: Schema.Attribute.Component<
      'blog-component.resource-details',
      true
    >;
  };
}

export interface BlogSectionRecommendedBlogs extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_recommended_blogs';
  info: {
    displayName: 'Recommended Blogs';
  };
  attributes: {
    blogList: Schema.Attribute.Component<'component.e-book-details', true>;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface BlogSectionRecommendedCourse extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_recommended_course';
  info: {
    description: '';
    displayName: 'Recommended Course';
  };
  attributes: {
    courses: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-template-1.course-template-1'
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface BlogSectionRecommendedCourses extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_recommended_courses';
  info: {
    displayName: 'Recommended Courses';
  };
  attributes: {
    courses: Schema.Attribute.Component<
      'blog-component.recommended-course-details',
      true
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface BlogSectionRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_related_articles';
  info: {
    description: '';
    displayName: 'Related Articles';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
  };
}

export interface BlogSectionSignupNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_signup_newsletters';
  info: {
    description: '';
    displayName: 'Signup Newsletter';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false>;
    description: Schema.Attribute.String;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iTag: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    preTag: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'footer.social-links', true>;
  };
}

export interface BlogSectionTableOfContents extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_table_of_contents';
  info: {
    description: '';
    displayName: 'Table Of Contents';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'blog-component.table-of-content-item',
      true
    >;
    redirectedUrl: Schema.Attribute.String;
  };
}

export interface BlogSectionTitleDescriptionWithAd
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_title_description_with_ads';
  info: {
    description: '';
    displayName: 'Title description with Ad';
  };
  attributes: {
    description1: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    description2: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    downloadToolkitAd: Schema.Attribute.Component<
      'blog-section.content-banner',
      false
    >;
    heading: Schema.Attribute.String;
    redirectedUrl: Schema.Attribute.String;
  };
}

export interface BlogSectionTitleWithDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_title_with_descriptions';
  info: {
    description: '';
    displayName: 'Title with Description';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    enableTitle: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    redirectedUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlogSectionVideoContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_video_content_blocks';
  info: {
    description: '';
    displayName: 'Video Content Block';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
    redirectedUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['youtube']>;
  };
}

export interface ComponentAboutCertificationQuestions
  extends Struct.ComponentSchema {
  collectionName: 'components_component_about_certification_questions';
  info: {
    displayName: 'About Certification Questions';
  };
  attributes: {
    explanation: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface ComponentAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_component_advantages';
  info: {
    description: '';
    displayName: 'Advantages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentAdvantages2 extends Struct.ComponentSchema {
  collectionName: 'components_component_advantages_2s';
  info: {
    displayName: 'Advantages 2';
  };
  attributes: {
    colorCode: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentAdvantages3 extends Struct.ComponentSchema {
  collectionName: 'components_component_advantages_3s';
  info: {
    displayName: 'Advantages 3';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentBannerTeam extends Struct.ComponentSchema {
  collectionName: 'components_component_banner_teams';
  info: {
    displayName: 'Banner Team';
  };
  attributes: {
    companyLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    companyName: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    promotedTo: Schema.Attribute.String;
  };
}

export interface ComponentBonusDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_bonus_details';
  info: {
    displayName: 'Bonus Details';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface ComponentButtonDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_button_details';
  info: {
    displayName: 'Button Details';
  };
  attributes: {
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'href']>;
  };
}

export interface ComponentButtonWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_component_button_with_icons';
  info: {
    displayName: 'Button With Icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'href']>;
  };
}

export interface ComponentCareerSuccessStoriesList
  extends Struct.ComponentSchema {
  collectionName: 'components_component_career_success_stories_lists';
  info: {
    displayName: 'Career Success Stories List';
  };
  attributes: {
    about: Schema.Attribute.Text;
    afterCompany: Schema.Attribute.Component<
      'component.career-success-story-company',
      false
    >;
    beforeCompany: Schema.Attribute.Component<
      'component.career-success-story-company',
      false
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentCareerSuccessStoryCompany
  extends Struct.ComponentSchema {
  collectionName: 'components_component_career_success_story_companies';
  info: {
    displayName: 'Career Success Story Company';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    role: Schema.Attribute.String;
  };
}

export interface ComponentCertifiedProfessionalRole
  extends Struct.ComponentSchema {
  collectionName: 'components_component_certified_professional_roles';
  info: {
    displayName: 'Certified Professional Role';
  };
  attributes: {
    list: Schema.Attribute.Component<
      'component.certified-professional-role-list',
      true
    >;
    role: Schema.Attribute.String;
  };
}

export interface ComponentCertifiedProfessionalRoleList
  extends Struct.ComponentSchema {
  collectionName: 'components_component_certified_professional_role_lists';
  info: {
    displayName: 'Certified Professional Role List';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['salaries', 'companies', 'jobs']>;
    value: Schema.Attribute.String;
  };
}

export interface ComponentCheckList extends Struct.ComponentSchema {
  collectionName: 'components_component_check_lists';
  info: {
    description: '';
    displayName: 'Check List';
  };
  attributes: {
    boldText: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.String;
  };
}

export interface ComponentCommentBlog extends Struct.ComponentSchema {
  collectionName: 'components_component_comment_blogs';
  info: {
    description: '';
    displayName: 'Comment Blog';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    companyLogo: Schema.Attribute.Media<'images'>;
    companyName: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    designation: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    postImage: Schema.Attribute.Media<'images'>;
    RedirectIcon: Schema.Attribute.Media<'images'>;
    redirectionLinkText: Schema.Attribute.String;
    redirectionUrl: Schema.Attribute.String;
    redirectText: Schema.Attribute.String;
  };
}

export interface ComponentContact extends Struct.ComponentSchema {
  collectionName: 'components_component_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    mobileNumber: Schema.Attribute.String;
  };
}

export interface ComponentCourseFeeCurrencyWise extends Struct.ComponentSchema {
  collectionName: 'components_component_course_fee_currency_wises';
  info: {
    displayName: 'Course Fee Currency Wise';
  };
  attributes: {
    asLowPerMonth: Schema.Attribute.Integer;
    comparePrice: Schema.Attribute.Integer;
    currency: Schema.Attribute.Relation<'oneToOne', 'api::currency.currency'>;
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    offerPercentage: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
  };
}

export interface ComponentCourseFeePlans extends Struct.ComponentSchema {
  collectionName: 'components_component_course_fee_plans';
  info: {
    description: '';
    displayName: 'Course Fee Plans';
  };
  attributes: {
    asLowPerMonth: Schema.Attribute.Integer & Schema.Attribute.Required;
    asLowPerMonthInfo: Schema.Attribute.String;
    comparePrice: Schema.Attribute.Integer & Schema.Attribute.Required;
    enableUpcomingBatches: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    features: Schema.Attribute.Component<'component.features', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    offerPercentage: Schema.Attribute.String & Schema.Attribute.Required;
    plan: Schema.Attribute.Enumeration<['default', 'corporate']> &
      Schema.Attribute.DefaultTo<'default'>;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Integer & Schema.Attribute.Required;
    prices: Schema.Attribute.Component<
      'component.course-fee-currency-wise',
      true
    >;
  };
}

export interface ComponentCourseOverview extends Struct.ComponentSchema {
  collectionName: 'components_component_course_overviews';
  info: {
    description: '';
    displayName: 'Course Overview';
  };
  attributes: {
    courseTrackOverview: Schema.Attribute.Component<
      'component.course-track-overview',
      false
    >;
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    noOfLessons: Schema.Attribute.BigInteger;
    noOfTools: Schema.Attribute.BigInteger;
    noOfTracks: Schema.Attribute.BigInteger;
    preHeading: Schema.Attribute.String;
  };
}

export interface ComponentCoursePrice extends Struct.ComponentSchema {
  collectionName: 'components_component_course_prices';
  info: {
    description: '';
    displayName: 'Course Price';
  };
  attributes: {
    comparePrice: Schema.Attribute.String;
    currency: Schema.Attribute.Relation<'oneToOne', 'api::currency.currency'>;
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price: Schema.Attribute.String;
  };
}

export interface ComponentCourseTrackDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_course_track_details';
  info: {
    displayName: 'Course Track Details';
  };
  attributes: {
    banner: Schema.Attribute.Component<
      'component.image-with-description',
      false
    >;
    trackList: Schema.Attribute.Component<
      'component.title-with-description',
      true
    >;
    trackName: Schema.Attribute.String;
    trackTitle: Schema.Attribute.String;
  };
}

export interface ComponentCourseTrackOverview extends Struct.ComponentSchema {
  collectionName: 'components_component_course_track_overviews';
  info: {
    description: '';
    displayName: 'Course Track Overview';
  };
  attributes: {
    courseTrackOverview: Schema.Attribute.Component<
      'component.course-track-details',
      true
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ComponentCtaContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_component_cta_content_blocks';
  info: {
    description: '';
    displayName: 'CTA Content Block';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentCurriculumTopics extends Struct.ComponentSchema {
  collectionName: 'components_component_curriculum_topics';
  info: {
    description: '';
    displayName: 'Curriculum Topics';
  };
  attributes: {
    heading: Schema.Attribute.String;
    learningObjectives: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    previewUrl: Schema.Attribute.String;
    topic: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ComponentDemandForCourseDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_component_demand_for_course_details';
  info: {
    displayName: 'Demand For Course Details';
  };
  attributes: {
    courseDetails: Schema.Attribute.Component<
      'component.demand-for-course-list',
      true
    >;
    courseName: Schema.Attribute.Text;
  };
}

export interface ComponentDemandForCourseList extends Struct.ComponentSchema {
  collectionName: 'components_component_demand_for_course_lists';
  info: {
    displayName: 'Demand For Course List';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    ponits: Schema.Attribute.Component<'component.points', true>;
  };
}

export interface ComponentDiscountTagDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_discount_tag_details';
  info: {
    displayName: 'Discount Tag Details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    discounts: Schema.Attribute.Component<'component.group-discount', true>;
    heading: Schema.Attribute.String;
  };
}

export interface ComponentEBookDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_e_book_details';
  info: {
    description: '';
    displayName: 'EBook Details';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.Text;
    time: Schema.Attribute.String;
    viewCount: Schema.Attribute.BigInteger;
  };
}

export interface ComponentEnterpriseDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_enterprise_details';
  info: {
    description: '';
    displayName: 'Enterprise Details';
  };
  attributes: {
    companyLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentExitPopup extends Struct.ComponentSchema {
  collectionName: 'components_component_exit_popups';
  info: {
    displayName: 'Exit Popup';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentFacts extends Struct.ComponentSchema {
  collectionName: 'components_component_facts';
  info: {
    description: '';
    displayName: 'Facts';
  };
  attributes: {
    fact: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentFaqDetailRole extends Struct.ComponentSchema {
  collectionName: 'components_component_faq_detail_roles';
  info: {
    displayName: 'FAQ Detail Role';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'component.faqs', true>;
    role: Schema.Attribute.String;
  };
}

export interface ComponentFaqs extends Struct.ComponentSchema {
  collectionName: 'components_component_faqs';
  info: {
    description: '';
    displayName: 'faqs';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String;
  };
}

export interface ComponentFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    feature: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.Text;
  };
}

export interface ComponentFlexiPassCard extends Struct.ComponentSchema {
  collectionName: 'components_component_flexi_pass_cards';
  info: {
    displayName: 'Flexi Pass Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentForm extends Struct.ComponentSchema {
  collectionName: 'components_component_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageTagline: Schema.Attribute.Component<
      'component.title-with-description',
      false
    >;
  };
}

export interface ComponentGotAQuestion extends Struct.ComponentSchema {
  collectionName: 'components_component_got_a_questions';
  info: {
    displayName: 'Got A Question';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
  };
}

export interface ComponentGroupDiscount extends Struct.ComponentSchema {
  collectionName: 'components_component_group_discounts';
  info: {
    displayName: 'Group Discount';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface ComponentHeaderItem extends Struct.ComponentSchema {
  collectionName: 'components_component_header_items';
  info: {
    displayName: 'Header Item';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    subMenus: Schema.Attribute.Component<'component.header-sub-item', true>;
  };
}

export interface ComponentHeaderSubItem extends Struct.ComponentSchema {
  collectionName: 'components_component_header_sub_items';
  info: {
    displayName: 'Header subItem';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface ComponentHighlightList extends Struct.ComponentSchema {
  collectionName: 'components_component_highlight_lists';
  info: {
    displayName: 'Highlight List';
  };
  attributes: {
    highlight: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.String;
  };
}

export interface ComponentHighlightSummary extends Struct.ComponentSchema {
  collectionName: 'components_component_highlight_summaries';
  info: {
    displayName: 'Highlight Summary';
  };
  attributes: {
    avgSalaryHike: Schema.Attribute.Integer & Schema.Attribute.Required;
    avgSalaryHikeTag: Schema.Attribute.String & Schema.Attribute.Required;
    careerTransitions: Schema.Attribute.String & Schema.Attribute.Required;
    careerTransitionTag: Schema.Attribute.String & Schema.Attribute.Required;
    highestSalaryHike: Schema.Attribute.Integer & Schema.Attribute.Required;
    highestSalaryHikeTag: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentHighlightedText extends Struct.ComponentSchema {
  collectionName: 'components_component_highlighted_texts';
  info: {
    displayName: 'Highlighted Text';
  };
  attributes: {
    colorCode: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ComponentHighlights2 extends Struct.ComponentSchema {
  collectionName: 'components_component_highlights_2s';
  info: {
    displayName: 'Highlights 2';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentHighlights3 extends Struct.ComponentSchema {
  collectionName: 'components_component_highlights_3s';
  info: {
    displayName: 'Highlights 3';
  };
  attributes: {
    highlightList: Schema.Attribute.Component<
      'component.learning-path-steps',
      true
    >;
    ratingDetails: Schema.Attribute.Component<
      'component.rating-details',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface ComponentIconWithCkeditor extends Struct.ComponentSchema {
  collectionName: 'components_component_icon_with_ckeditors';
  info: {
    displayName: 'Icon With Ckeditor';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ComponentIconWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_component_icon_with_titles';
  info: {
    displayName: 'Icon With Title';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentImageHeaderDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_component_image_header_descriptions';
  info: {
    displayName: 'ImageHeaderDescription';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentImageTagLines extends Struct.ComponentSchema {
  collectionName: 'components_component_image_tag_lines';
  info: {
    description: '';
    displayName: 'Image Tag Lines';
  };
  attributes: {
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tagLine: Schema.Attribute.String;
  };
}

export interface ComponentImageWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_image_with_descriptions';
  info: {
    displayName: 'Image With Description';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentImageWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_component_image_with_titles';
  info: {
    displayName: 'Image with title';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentInfoDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_info_details';
  info: {
    displayName: 'Info Details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.Text;
  };
}

export interface ComponentLearnerTestimonialsMap
  extends Struct.ComponentSchema {
  collectionName: 'components_component_learner_testimonials_maps';
  info: {
    displayName: 'Learner Testimonials Map';
  };
  attributes: {
    backGroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    highLightedHeading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    userTestimonialsReviews: Schema.Attribute.Component<
      'component.user-upskilling-journey',
      true
    >;
  };
}

export interface ComponentLearningHubTabs extends Struct.ComponentSchema {
  collectionName: 'components_component_learning_hub_tabs';
  info: {
    description: '';
    displayName: 'Learning Hub Tabs';
  };
  attributes: {
    blogList: Schema.Attribute.Component<'component.info-details', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentLearningPathSteps extends Struct.ComponentSchema {
  collectionName: 'components_component_learning_path_steps';
  info: {
    displayName: 'Learning Path Steps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentLeftSideBarMenus extends Struct.ComponentSchema {
  collectionName: 'components_component_left_side_bar_menus_s';
  info: {
    description: '';
    displayName: 'Menus ';
  };
  attributes: {
    redirectUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['link', 'button']>;
  };
}

export interface ComponentList extends Struct.ComponentSchema {
  collectionName: 'components_component_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentManagementTeams extends Struct.ComponentSchema {
  collectionName: 'components_component_management_teams';
  info: {
    displayName: 'Management Teams';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface ComponentMeetTheTeamRoleList extends Struct.ComponentSchema {
  collectionName: 'components_component_meet_the_team_role_lists';
  info: {
    displayName: 'Meet The Team Role List';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    role: Schema.Attribute.String;
    users: Schema.Attribute.Component<'component.meet-the-team-roles', true>;
  };
}

export interface ComponentMeetTheTeamRoles extends Struct.ComponentSchema {
  collectionName: 'components_component_meet_the_team_roles';
  info: {
    description: '';
    displayName: 'Meet The Team Role User';
  };
  attributes: {
    about: Schema.Attribute.Text;
    companyLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    designation: Schema.Attribute.String;
    experience: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentMegaMenuCourseCategory
  extends Struct.ComponentSchema {
  collectionName: 'components_component_mega__menu_categories';
  info: {
    description: '';
    displayName: 'Mega Menu Course Category';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    courses: Schema.Attribute.Component<
      'component.mega-menu-course-detail',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface ComponentMegaMenuCourseDetail extends Struct.ComponentSchema {
  collectionName: 'components_component_mega_menu_course_details';
  info: {
    displayName: 'Mega Menu Course Detail';
  };
  attributes: {
    course: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-template-1.course-template-1'
    >;
    enableJobAssistance: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enableNewFlag: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentPoints extends Struct.ComponentSchema {
  collectionName: 'components_component_points';
  info: {
    displayName: 'Points';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface ComponentPrerequisites extends Struct.ComponentSchema {
  collectionName: 'components_component_prerequisites';
  info: {
    displayName: 'Prerequisites';
  };
  attributes: {
    prerequisite: Schema.Attribute.String;
  };
}

export interface ComponentProfessionalSection extends Struct.ComponentSchema {
  collectionName: 'components_component_professional_sections';
  info: {
    displayName: 'Professional Section';
  };
  attributes: {};
}

export interface ComponentProfessions extends Struct.ComponentSchema {
  collectionName: 'components_component_professions';
  info: {
    displayName: 'Professions';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ComponentQuickFactDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_quick_fact_details';
  info: {
    displayName: 'Quick Fact details';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Schema.Attribute.Integer;
  };
}

export interface ComponentRatingDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_rating_details';
  info: {
    description: '';
    displayName: 'ratingDetails';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    noOfReviews: Schema.Attribute.Integer;
    rating: Schema.Attribute.Decimal;
  };
}

export interface ComponentRatingDetails2 extends Struct.ComponentSchema {
  collectionName: 'components_component_rating_details_2s';
  info: {
    description: '';
    displayName: 'RatingDetails 2';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    noOfReviews: Schema.Attribute.Integer;
    ratings: Schema.Attribute.Decimal;
    reviewType: Schema.Attribute.Enumeration<['google', 'trustPilot', 'other']>;
  };
}

export interface ComponentRatingDetails3 extends Struct.ComponentSchema {
  collectionName: 'components_component_rating_details_3s';
  info: {
    displayName: 'Rating Details 3';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rating: Schema.Attribute.Float;
  };
}

export interface ComponentRecommendedCourseDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_component_recommended_course_details';
  info: {
    description: '';
    displayName: 'Recommended Course Details';
  };
  attributes: {
    deliveryType: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Classroom', 'Self Paced', 'Live Online Classroom']
      >;
    durationInHrs: Schema.Attribute.Integer;
    enrolledLearners: Schema.Attribute.Integer;
    exploreButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    globalAccreditation: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isBestSeller: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isNew: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRecommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isTrending: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    prices: Schema.Attribute.Component<'component.course-price', true>;
    pricingInfo: Schema.Attribute.JSON;
  };
}

export interface ComponentRedirectionUrl extends Struct.ComponentSchema {
  collectionName: 'components_component_redirection_urls';
  info: {
    description: '';
    displayName: 'Redirection URL';
  };
  attributes: {
    redirectIcon: Schema.Attribute.Media<'images'>;
    redirectionLinkText: Schema.Attribute.String;
    redirectionUrl: Schema.Attribute.String;
    redirectText: Schema.Attribute.String;
  };
}

export interface ComponentRegister extends Struct.ComponentSchema {
  collectionName: 'components_component_registers';
  info: {
    description: '';
    displayName: 'Register';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    offer: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    redirectUrl: Schema.Attribute.String;
    sub_label: Schema.Attribute.String;
  };
}

export interface ComponentReviewUser extends Struct.ComponentSchema {
  collectionName: 'components_component_review_users';
  info: {
    displayName: 'Review User';
  };
  attributes: {
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
    profile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reviewTypeUrl: Schema.Attribute.String;
  };
}

export interface ComponentReviews extends Struct.ComponentSchema {
  collectionName: 'components_component_reviews';
  info: {
    description: '';
    displayName: 'Reviews';
  };
  attributes: {
    rating: Schema.Attribute.Decimal;
    review: Schema.Attribute.Text;
    reviewTagLine: Schema.Attribute.String;
    reviewType: Schema.Attribute.Enumeration<
      ['google', 'trustpilot', 'others']
    >;
    user: Schema.Attribute.Component<'component.review-user', false>;
  };
}

export interface ComponentRoleWiseIncreased extends Struct.ComponentSchema {
  collectionName: 'components_component_role_wise_increaseds';
  info: {
    description: '';
    displayName: 'Role Wise Increased';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    points: Schema.Attribute.Component<'component.points', true>;
    role: Schema.Attribute.String;
  };
}

export interface ComponentSaleBanner extends Struct.ComponentSchema {
  collectionName: 'components_component_sale_banners';
  info: {
    description: '';
    displayName: 'Sale Banner';
  };
  attributes: {
    colorCode: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'oneToOne', 'api::country.country'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    masterCourse: Schema.Attribute.String &
      Schema.Attribute.CustomField<
        'plugin::custom-dropdown.custom-dropdown',
        {
          collectionType: 'sale_banner';
        }
      >;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    redirectUrl: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentSlots extends Struct.ComponentSchema {
  collectionName: 'components_component_slots';
  info: {
    displayName: 'slots';
  };
  attributes: {
    slot: Schema.Attribute.DateTime;
  };
}

export interface ComponentSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'twitter',
        'linkedin',
        'snapchat',
        'tiktok',
        'pinterest',
        'reddit',
        'youtube',
        'whatsapp',
        'telegram',
        'tumblr',
        'discord',
        'wechat',
        'flickr',
      ]
    >;
    url: Schema.Attribute.String;
  };
}

export interface ComponentSocialNetworkRatings extends Struct.ComponentSchema {
  collectionName: 'components_component_social_network_ratings';
  info: {
    displayName: 'Social Network Ratings';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    noOfReviews: Schema.Attribute.Integer;
    rating: Schema.Attribute.Decimal;
  };
}

export interface ComponentStats extends Struct.ComponentSchema {
  collectionName: 'components_component_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    statsList: Schema.Attribute.Component<
      'component.learning-path-steps',
      true
    >;
  };
}

export interface ComponentSupportTeamDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_support_team_details';
  info: {
    displayName: 'Support team Details';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    workedWith: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentTalentJourneyDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_talent_journey_details';
  info: {
    description: '';
    displayName: 'Talent Journey Details';
  };
  attributes: {
    banner: Schema.Attribute.Component<'webinar-component.info-details', false>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'component.advantages-3', true>;
    getStartedButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface ComponentTalentJourneySteps extends Struct.ComponentSchema {
  collectionName: 'components_component_talent_journey_steps';
  info: {
    displayName: 'Talent Journey Steps';
  };
  attributes: {
    details: Schema.Attribute.Component<
      'component.talent-journey-details',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTeamProfile extends Struct.ComponentSchema {
  collectionName: 'components_component_team_profiles';
  info: {
    description: '';
    displayName: 'Team Profile';
  };
  attributes: {
    about: Schema.Attribute.Text;
    companyLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkedinUrl: Schema.Attribute.String;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_component_testimonial_cards';
  info: {
    description: '';
    displayName: 'Testimonial Card';
  };
  attributes: {
    about: Schema.Attribute.Text;
    companyName: Schema.Attribute.String;
    companyUrl: Schema.Attribute.Text;
    compnayLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    designation: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    noOfReviews: Schema.Attribute.BigInteger;
    profileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rating: Schema.Attribute.Float;
    review: Schema.Attribute.Text;
    reviewType: Schema.Attribute.Enumeration<['google', 'trustPilot', 'other']>;
    type: Schema.Attribute.Enumeration<['post', 'video', 'youtube']>;
    videoThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    videoUrl: Schema.Attribute.Text;
  };
}

export interface ComponentTextValue extends Struct.ComponentSchema {
  collectionName: 'components_component_text_values';
  info: {
    displayName: 'Text Value';
  };
  attributes: {
    text: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ComponentTitleWithDescription extends Struct.ComponentSchema {
  collectionName: 'components_component_title_with_descriptions';
  info: {
    description: '';
    displayName: 'Title With Description';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTitleWithDescription2 extends Struct.ComponentSchema {
  collectionName: 'components_component_title_with_description_2s';
  info: {
    displayName: 'Title With Description 2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentTrustedByCompanies extends Struct.ComponentSchema {
  collectionName: 'components_component_trusted_by_companies';
  info: {
    displayName: 'Trusted by Companies';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    preHeading: Schema.Attribute.String;
  };
}

export interface ComponentUpgradePlan extends Struct.ComponentSchema {
  collectionName: 'components_component_upgrade_plans';
  info: {
    description: '';
    displayName: 'Upgrade Plan';
  };
  attributes: {
    eliteText: Schema.Attribute.Text;
    feature: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    isInElite: Schema.Attribute.Boolean;
    isInStandard: Schema.Attribute.Boolean;
    standardText: Schema.Attribute.Text;
  };
}

export interface ComponentUpgradePlanPopUp extends Struct.ComponentSchema {
  collectionName: 'components_component_upgrade_plan_pop_ups';
  info: {
    description: '';
    displayName: 'Upgrade Plan Pop Up';
  };
  attributes: {
    details: Schema.Attribute.Component<'component.upgrade-plan', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentUpskilledCard extends Struct.ComponentSchema {
  collectionName: 'components_component_upskilled_cards';
  info: {
    displayName: 'Upskilled Card';
  };
  attributes: {
    details: Schema.Attribute.Component<'component.image-with-title', false>;
    heading: Schema.Attribute.Component<'component.image-with-title', false>;
  };
}

export interface ComponentUpskilledDetails extends Struct.ComponentSchema {
  collectionName: 'components_component_upskilled_details';
  info: {
    displayName: 'Upskilled Details';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    feature: Schema.Attribute.Component<'component.image-with-title', false>;
    feature2: Schema.Attribute.Component<'component.upskilled-card', false>;
    heading: Schema.Attribute.Component<'component.image-with-title', false>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentUserProfile extends Struct.ComponentSchema {
  collectionName: 'components_component_user_profiles';
  info: {
    description: '';
    displayName: 'User Profile';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    companyLogo: Schema.Attribute.Media<'images'>;
    companyName: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentUserUpskillingJourney extends Struct.ComponentSchema {
  collectionName: 'components_component_user_upskilling_journeys';
  info: {
    description: '';
    displayName: 'User Upskilling Journey';
  };
  attributes: {
    companyLogo1: Schema.Attribute.Component<
      'component.image-with-title',
      false
    >;
    companyLogo2: Schema.Attribute.Component<
      'component.image-with-title',
      false
    >;
    description: Schema.Attribute.Text;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EventComponentAdvertiseWithUs extends Struct.ComponentSchema {
  collectionName: 'components_event_component_advertise_with_uses';
  info: {
    displayName: 'Advertise With Us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    getInTouchButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
  };
}

export interface EventComponentBecomeAnSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_event_component_become_a_speakers';
  info: {
    description: '';
    displayName: 'Become A Speaker';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    showcaseYourExpertiseButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    userDetails: Schema.Attribute.Component<
      'event-component.profile-card',
      true
    >;
  };
}

export interface EventComponentCardCarousel extends Struct.ComponentSchema {
  collectionName: 'components_event_component_card_carousels';
  info: {
    displayName: 'Card Carousel';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    viewMoreButton: Schema.Attribute.Component<
      'component.button-details',
      true
    >;
  };
}

export interface EventComponentConnectOptions extends Struct.ComponentSchema {
  collectionName: 'components_event_component_connect_options';
  info: {
    displayName: 'Connect Options';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface EventComponentEventSummaryDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_event_component_event_summary_details';
  info: {
    description: '';
    displayName: 'Event Summary Details';
  };
  attributes: {
    features: Schema.Attribute.Component<'event-component.overview', true>;
    heading: Schema.Attribute.String;
  };
}

export interface EventComponentOverview extends Struct.ComponentSchema {
  collectionName: 'components_event_component_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<
      'blog-component.feature-with-icon',
      true
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface EventComponentParticipantDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_event_component_participant_details';
  info: {
    displayName: 'Participant Details';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
  };
}

export interface EventComponentProfileCard extends Struct.ComponentSchema {
  collectionName: 'components_event_component_profile_cards';
  info: {
    displayName: 'Profile Card';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

export interface EventSectionConferenceTracks extends Struct.ComponentSchema {
  collectionName: 'components_event_section_conference_tracks';
  info: {
    displayName: 'Conference Tracks';
  };
  attributes: {
    applyToSpeakButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    trackDetails: Schema.Attribute.Component<
      'event-component.card-carousel',
      true
    >;
  };
}

export interface EventSectionDailyNewsLetter extends Struct.ComponentSchema {
  collectionName: 'components_event_section_daily_news_letters';
  info: {
    displayName: 'Daily NewsLetter';
  };
  attributes: {
    appDownloadDescription: Schema.Attribute.String;
    appDownloadTitle: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    privacyConsent: Schema.Attribute.Text;
  };
}

export interface EventSectionEventInsights extends Struct.ComponentSchema {
  collectionName: 'components_event_section_event_insights';
  info: {
    displayName: 'Event Insights';
  };
  attributes: {
    eventInsights: Schema.Attribute.Component<'component.advantages', true>;
    heading: Schema.Attribute.String;
  };
}

export interface EventSectionEventSummary extends Struct.ComponentSchema {
  collectionName: 'components_event_section_event_summaries';
  info: {
    displayName: 'Event Summary';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'event-component.event-summary-details',
      true
    >;
    getTicketsButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface EventSectionFaqDetails extends Struct.ComponentSchema {
  collectionName: 'components_event_section_faq_details';
  info: {
    displayName: 'FAQ Details';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    roleWiseFaqs: Schema.Attribute.Component<'component.faq-detail-role', true>;
  };
}

export interface EventSectionGlobalSpeakers extends Struct.ComponentSchema {
  collectionName: 'components_event_section_global_speakers';
  info: {
    displayName: 'Global Speakers';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.Text;
  };
}

export interface EventSectionJoinTheComunity extends Struct.ComponentSchema {
  collectionName: 'components_event_section_join_the_comunities';
  info: {
    displayName: 'Join The Comunity';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    privacyConsent: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    subscribeForFree: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface EventSectionOurSponsers extends Struct.ComponentSchema {
  collectionName: 'components_event_section_our_sponsers';
  info: {
    displayName: 'Our Sponsers';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.Text;
    requestToPartnerButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    sponsorLogos: Schema.Attribute.Component<'blog-component.image', true>;
  };
}

export interface EventSectionPartnerWithUs extends Struct.ComponentSchema {
  collectionName: 'components_event_section_partner_with_uses';
  info: {
    displayName: 'Partner with Us';
  };
  attributes: {
    getInTouchButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    waysToCollaborate: Schema.Attribute.Component<'component.advantages', true>;
  };
}

export interface EventSectionPromateAndConnect extends Struct.ComponentSchema {
  collectionName: 'components_event_section_promote_and_connects';
  info: {
    displayName: 'Promote And Connect';
  };
  attributes: {
    advertiseWithUs: Schema.Attribute.Component<
      'event-component.advertise-with-us',
      false
    >;
    connectWithUs: Schema.Attribute.Component<
      'event-component.connect-options',
      true
    >;
  };
}

export interface EventSectionWhatParticipantsSayAboutUs
  extends Struct.ComponentSchema {
  collectionName: 'components_event_section_participants_feedback';
  info: {
    displayName: 'What Participants Say About Us';
  };
  attributes: {
    heading: Schema.Attribute.String;
    participantTestimonials: Schema.Attribute.Component<
      'event-component.participant-details',
      true
    >;
    preHeading: Schema.Attribute.String;
    subscribeToOurLetter: Schema.Attribute.Component<'component.form', true>;
  };
}

export interface EventSectionWhatSNew extends Struct.ComponentSchema {
  collectionName: 'components_event_section_what_s_news';
  info: {
    displayName: "What's New";
  };
  attributes: {
    latestUpdates: Schema.Attribute.Component<
      'component.image-header-description',
      true
    >;
  };
}

export interface EventSectionWhyAttend extends Struct.ComponentSchema {
  collectionName: 'components_event_section_why_attends';
  info: {
    displayName: 'Why Attend';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'component.advantages-2', true>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
  };
}

export interface FooterBlogCategories extends Struct.ComponentSchema {
  collectionName: 'components_footer_blog_categories';
  info: {
    displayName: 'Blog Categories';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterCategories extends Struct.ComponentSchema {
  collectionName: 'components_footer_course_categories';
  info: {
    description: '';
    displayName: 'Categories';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterCompanyLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_company_links';
  info: {
    description: '';
    displayName: 'Company';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterCourses extends Struct.ComponentSchema {
  collectionName: 'components_footer_free_courses';
  info: {
    description: '';
    displayName: 'Courses';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    description: '';
    displayName: 'Links';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_media_links';
  info: {
    displayName: 'Media Links';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.social-links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterPartnerWithUs extends Struct.ComponentSchema {
  collectionName: 'components_footer_partner_with_uses';
  info: {
    displayName: 'Partner With Us';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterPolicies extends Struct.ComponentSchema {
  collectionName: 'components_footer_policies';
  info: {
    description: '';
    displayName: 'Policies';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterResources extends Struct.ComponentSchema {
  collectionName: 'components_footer_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSupport extends Struct.ComponentSchema {
  collectionName: 'components_footer_supports';
  info: {
    displayName: 'Support';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'footer.links', true> &
      Schema.Attribute.Required;
  };
}

export interface FooterSupportContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_support_contacts';
  info: {
    description: '';
    displayName: 'Support Contact';
  };
  attributes: {
    contact: Schema.Attribute.Component<'component.contact', true> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageComponentButtonDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_button_details';
  info: {
    description: '';
    displayName: 'Button Details';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'href']>;
  };
}

export interface LandingPageComponentCouponButton
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_coupon_buttons';
  info: {
    description: '';
    displayName: 'Coupon Button';
  };
  attributes: {
    couponCode: Schema.Attribute.String;
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'href']>;
  };
}

export interface LandingPageComponentCourseTemplate1ComponentsDropdown
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_ct1_components_name';
  info: {
    displayName: 'CT1 Components Name';
  };
  attributes: {
    courseTemplateComponent: Schema.Attribute.Enumeration<
      [
        'ComponentSectionCt1Banner',
        'ComponentComponentFlexiPassCard',
        'ComponentSectionLeftSideBarMenus',
        'ComponentComponentHighlightSummary',
        'ComponentSectionHighlights',
        'ComponentSectionWhyProfela',
        'ComponentSectionCourseFee',
        'ComponentSectionMeetTheTeam',
        'ComponentComponentGotAQuestion',
        'ComponentSectionReviewDetails',
        'ComponentSectionSocialNetworkRatings',
        'ComponentSectionCurriculum',
        'ComponentSectionFaqDetails',
        'ComponentComponentGotAQuestion',
        'ComponentSectionCourseCertification',
        'ComponentSectionPrerequisitesForTraining',
        'ComponentSectionWhoShouldAttendCourse',
        'ComponentSectionCertifiedProfessionals',
        'ComponentSectionCertificationDetails',
        'ComponentComponentGotAQuestion',
        'ComponentSectionLearningPath',
        'ComponentSectionProjectManagementTeam',
        'ComponentSectionRelatedCourses',
        'ComponentSectionTrendingCourses',
        'ComponentSectionTrendingCoursesInOtherCities',
      ]
    >;
  };
}

export interface LandingPageComponentDownloadButton
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_download_button_s';
  info: {
    displayName: 'Download button ';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface LandingPageComponentExpertCallForm
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_expert_call_forms';
  info: {
    displayName: 'Expert Call Form';
  };
  attributes: {
    button: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
    enableForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    UserEngagementHighlight: Schema.Attribute.String;
    UserEngagementHighlightIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LandingPageComponentFacts extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_facts';
  info: {
    displayName: 'Facts';
  };
  attributes: {
    fact: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageComponentFeature extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface LandingPageComponentHighlights extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    highlight: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface LandingPageComponentMenuBarDetail
  extends Struct.ComponentSchema {
  collectionName: 'components_component_lp_menu_bar_details';
  info: {
    description: '';
    displayName: 'Menu Bar details';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    redirectUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['link', 'button']>;
  };
}

export interface LandingPageComponentRatingDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_rating_details';
  info: {
    displayName: 'ratingDetails';
  };
  attributes: {
    icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    noOfReviews: Schema.Attribute.Integer;
    rating: Schema.Attribute.Decimal;
  };
}

export interface LandingPageComponentRemoveCourseComponents
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_remove_course_components';
  info: {
    displayName: 'Remove Course Components';
  };
  attributes: {
    removeCourseComponents: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'ComponentSectionCt1Banner',
          'ComponentComponentFlexiPassCard',
          'ComponentSectionLeftSideBarMenus',
          'ComponentComponentHighlightSummary',
          'ComponentSectionHighlights',
          'ComponentSectionWhyProfela',
          'ComponentSectionCourseFee',
          'ComponentSectionMeetTheTeam',
          'ComponentComponentGotAQuestion',
          'ComponentSectionReviewDetails',
          'ComponentSectionSocialNetworkRatings',
          'ComponentSectionCurriculum',
          'ComponentSectionFaqDetails',
          'ComponentComponentGotAQuestion',
          'ComponentSectionCourseCertification',
          'ComponentSectionPrerequisitesForTraining',
          'ComponentSectionWhoShouldAttendCourse',
          'ComponentSectionCertifiedProfessionals',
          'ComponentSectionCertificationDetails',
          'ComponentComponentGotAQuestion',
          'ComponentSectionLearningPath',
          'ComponentSectionProjectManagementTeam',
          'ComponentSectionRelatedCourses',
          'ComponentSectionTrendingCourses',
          'ComponentSectionTrendingCoursesInOtherCities',
        ]
      >;
  };
}

export interface LandingPageSectionCourseFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_course_features';
  info: {
    description: '';
    displayName: 'Course Features';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'blog-component.feature-with-icon',
      true
    >;
    heading: Schema.Attribute.String;
    individualButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface LandingPageSectionLandingPageBanner
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_lp_ct1_banners';
  info: {
    description: '';
    displayName: 'LP CT1 Banner';
  };
  attributes: {
    authorizationLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorizationTagLine: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    downloadButton: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    enrolledLearners: Schema.Attribute.String;
    expertCallForm: Schema.Attribute.Component<
      'landing-page-component.expert-call-form',
      false
    >;
    features: Schema.Attribute.Component<
      'landing-page-component.feature',
      true
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    rating: Schema.Attribute.Component<
      'landing-page-component.rating-details',
      false
    >;
    replaceComponentTo: Schema.Attribute.Component<
      'landing-page-component.course-template-1-components-dropdown',
      false
    >;
    viewButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
  };
}

export interface LandingPageSectionLpHighlights extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_lp_highlights';
  info: {
    description: '';
    displayName: 'LP Highlights';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    highlightList: Schema.Attribute.Component<
      'landing-page-component.highlights',
      true
    >;
    preHeading: Schema.Attribute.String;
    replaceComponentTo: Schema.Attribute.Component<
      'landing-page-component.course-template-1-components-dropdown',
      false
    >;
  };
}

export interface LandingPageSectionLpHorizontalMenu
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_lp_horizontal_menus';
  info: {
    description: '';
    displayName: 'LP Horizontal menu';
  };
  attributes: {
    downloadButton: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    menus: Schema.Attribute.Component<
      'landing-page-component.menu-bar-detail',
      true
    >;
    scheduleButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
  };
}

export interface LandingPageSectionLpMeetTheTeamDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_lp_team_details';
  info: {
    description: '';
    displayName: 'LP Meet The Team Details';
  };
  attributes: {
    achievements: Schema.Attribute.Component<
      'blog-component.feature-with-icon',
      true
    >;
    heading: Schema.Attribute.String;
    instructors: Schema.Attribute.Component<
      'component.meet-the-team-roles',
      true
    >;
    passPercenatge: Schema.Attribute.BigInteger;
    passPercenatgeTitle: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    progressTagLine: Schema.Attribute.Text;
    replaceComponentTo: Schema.Attribute.Component<
      'landing-page-component.course-template-1-components-dropdown',
      false
    >;
    scheduleACallButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
  };
}

export interface LandingPageSectionQuickFacts extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_lp_quick_facts';
  info: {
    description: '';
    displayName: 'LP Quick Facts';
  };
  attributes: {
    facts: Schema.Attribute.Component<'landing-page-component.facts', true>;
    heading: Schema.Attribute.String;
    replaceComponentTo: Schema.Attribute.Component<
      'landing-page-component.course-template-1-components-dropdown',
      false
    >;
  };
}

export interface LandingPageSectionTalkToAnAdvisor
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_talk_to_an_advisors';
  info: {
    description: '';
    displayName: 'Talk to an Advisor';
  };
  attributes: {
    contactNumber: Schema.Attribute.String;
    contactTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    formType: Schema.Attribute.Enumeration<
      ['scheduleButtonView', 'talkToOurAdvisorView']
    >;
    heading: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    tagInfo: Schema.Attribute.Text;
  };
}

export interface LandingPageSectionTopMenuBar extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_section_top_menu_bars';
  info: {
    description: '';
    displayName: 'Top Menu Bar';
  };
  attributes: {
    menus: Schema.Attribute.Component<
      'landing-page-component.menu-bar-detail',
      true
    >;
  };
}

export interface SectionAboutCertification extends Struct.ComponentSchema {
  collectionName: 'components_section_about_certifications';
  info: {
    description: '';
    displayName: 'About Certification';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    questions: Schema.Attribute.Component<
      'component.about-certification-questions',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionAboutEBook extends Struct.ComponentSchema {
  collectionName: 'components_section_about_e_books';
  info: {
    displayName: 'About EBook';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionAcademies extends Struct.ComponentSchema {
  collectionName: 'components_section_academies';
  info: {
    description: '';
    displayName: 'Academies';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    techList: Schema.Attribute.Component<'component.info-details', true>;
    viewAllButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface SectionBusinessImpact extends Struct.ComponentSchema {
  collectionName: 'components_section_business_impacts';
  info: {
    displayName: 'Business Impact';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    impactMetrics: Schema.Attribute.Component<
      'component.title-with-description-2',
      true
    >;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionCareerSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_section_career_success_stories';
  info: {
    displayName: 'Career Success Stories';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    stories: Schema.Attribute.Component<
      'component.career-success-stories-list',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_section_case_studies';
  info: {
    displayName: 'Case Studies';
  };
  attributes: {
    description: Schema.Attribute.Text;
    engagementGrowthShowcase: Schema.Attribute.Component<
      'component.cta-content-block',
      true
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionCertificationDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_certification_details';
  info: {
    displayName: 'CertificationDetails';
  };
  attributes: {
    certificationImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'component.advantages', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionCertifiedProfessionals extends Struct.ComponentSchema {
  collectionName: 'components_section_certified_professionals';
  info: {
    description: '';
    displayName: 'Certified Professionals';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    roles: Schema.Attribute.Component<
      'component.certified-professional-role',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionChallengeYourWorkforce extends Struct.ComponentSchema {
  collectionName: 'components_section_challenge_your_workforces';
  info: {
    displayName: 'Challenge Your Workforce';
  };
  attributes: {
    description: Schema.Attribute.String;
    features: Schema.Attribute.Component<'component.icon-with-title', true>;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionContinentalBasedEnrolledLearners
  extends Struct.ComponentSchema {
  collectionName: 'components_section_continental_based_enrolled_learners';
  info: {
    description: '';
    displayName: 'continentalBasedEnrolledLearners';
  };
  attributes: {
    continent: Schema.Attribute.Enumeration<
      [
        '"Africa",',
        '"Asia",',
        '"Europe",',
        '"North America",',
        '"South America",',
        '"Australia",',
        '"Antarctica"',
      ]
    >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    learnerCount: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionCourseCertification extends Struct.ComponentSchema {
  collectionName: 'components_section_course_certification';
  info: {
    displayName: 'CourseCertification';
  };
  attributes: {
    features: Schema.Attribute.Component<'component.advantages', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionCourseFee extends Struct.ComponentSchema {
  collectionName: 'components_section_course_fee';
  info: {
    description: '';
    displayName: 'Course Fee';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    isMoneyBackGuaranteeLogoEnabled: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    plans: Schema.Attribute.Component<'component.course-fee-plans', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    tagInfo: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionCourseSummary extends Struct.ComponentSchema {
  collectionName: 'components_section_course_summaries';
  info: {
    displayName: 'Course Summary';
  };
  attributes: {
    courseSummaryDetails: Schema.Attribute.Component<
      'component.course-overview',
      true
    >;
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionCoursesWeHave extends Struct.ComponentSchema {
  collectionName: 'components_section_courses_we_haves';
  info: {
    displayName: 'Courses we have';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionCt1Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_1_banners';
  info: {
    description: '';
    displayName: 'CT1 Banner';
  };
  attributes: {
    contactButton: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
    curriculumFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    enrolledLearners: Schema.Attribute.String & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'component.features', true> &
      Schema.Attribute.Required;
    getQuote: Schema.Attribute.Component<'component.button-details', false> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String;
    highlightedTagLine: Schema.Attribute.Component<
      'component.image-tag-lines',
      false
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imageTagLines: Schema.Attribute.Component<
      'component.image-tag-lines',
      true
    > &
      Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    quoteTagLine: Schema.Attribute.String & Schema.Attribute.Required;
    ratingDetails: Schema.Attribute.Component<
      'component.rating-details',
      true
    > &
      Schema.Attribute.Required;
    recognitionLabel: Schema.Attribute.Component<
      'component.image-with-description',
      false
    >;
    registerForDemoButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    subHeading: Schema.Attribute.String & Schema.Attribute.Required;
    trainingDetails: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionCt10Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_10_banners';
  info: {
    description: '';
    displayName: 'CT10 Banner';
  };
  attributes: {
    badgeTag: Schema.Attribute.String;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    enrolledLearners: Schema.Attribute.String;
    enterpriseButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    features: Schema.Attribute.Component<'webinar-component.key-points', true>;
    heading: Schema.Attribute.Text;
    heading2: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    individualButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    learnerTestimonials: Schema.Attribute.Component<
      'component.learner-testimonials-map',
      false
    >;
    ratingDetails: Schema.Attribute.Component<
      'component.rating-details-2',
      true
    >;
    ratings: Schema.Attribute.Component<'component.rating-details-2', false>;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
  };
}

export interface SectionCt11Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_11_banners';
  info: {
    description: '';
    displayName: 'CT11 Banner';
  };
  attributes: {
    badge: Schema.Attribute.Component<'component.icon-with-title', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    features: Schema.Attribute.Component<'component.icon-with-ckeditor', true>;
    heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionCt12Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_12_banners';
  info: {
    description: '';
    displayName: 'CT12 Banner';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<
      'webinar-component.webinar-features',
      false
    >;
    heading: Schema.Attribute.Text;
    heading2: Schema.Attribute.Component<'component.highlighted-text', false>;
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ourClients: Schema.Attribute.Component<'section.our-clients', false>;
    timezoneAbbreviation: Schema.Attribute.Blocks;
    type: Schema.Attribute.Enumeration<['with-features', 'without-features']>;
    webinarDuration: Schema.Attribute.String;
  };
}

export interface SectionCt13Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_13_banners';
  info: {
    description: '';
    displayName: 'CT13 Banner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    downloadBrochure: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    features: Schema.Attribute.Component<'component.icon-with-title', true>;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    requestDemoButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface SectionCt14Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_14_banners';
  info: {
    description: '';
    displayName: 'CT14 Banner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'component.icon-with-ckeditor', true>;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SectionCt15Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_15_banners';
  info: {
    displayName: 'CT15 Banner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    date: Schema.Attribute.Date;
    from: Schema.Attribute.Time;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    registeredLearners: Schema.Attribute.BigInteger;
    to: Schema.Attribute.Time;
  };
}

export interface SectionCt16Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_16_banners';
  info: {
    displayName: 'CT16 Banner';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionCt17Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_17_banners';
  info: {
    description: '';
    displayName: 'CT17 Banner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'component.button-with-icon', false>;
    description: Schema.Attribute.Text;
    downloadBrochureButton: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    heading: Schema.Attribute.Text;
  };
}

export interface SectionCt18Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_18_banners';
  info: {
    displayName: 'CT18 Banner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    getStartedButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.Text;
  };
}

export interface SectionCt2Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_2_banners';
  info: {
    description: '';
    displayName: 'CT2 Banner';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    enrolledLearners: Schema.Attribute.String & Schema.Attribute.Required;
    enterpriseButton: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
    heading1: Schema.Attribute.String & Schema.Attribute.Required;
    heading2: Schema.Attribute.String & Schema.Attribute.Required;
    heading3: Schema.Attribute.String & Schema.Attribute.Required;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    individualButton: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    teams: Schema.Attribute.Component<'component.banner-team', true> &
      Schema.Attribute.Required;
    TrustedCompany: Schema.Attribute.Component<
      'component.trusted-by-companies',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionCt3Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_3_banners';
  info: {
    description: '';
    displayName: 'CT3 Banner';
  };
  attributes: {
    authorizationLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorizationTagLine: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    downloadButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    enrolledLearners: Schema.Attribute.String;
    expertCallForm: Schema.Attribute.Component<
      'landing-page-component.expert-call-form',
      false
    >;
    features: Schema.Attribute.Component<'component.features', true>;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    rating: Schema.Attribute.Component<
      'landing-page-component.rating-details',
      false
    >;
    registerForDemo: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    viewButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
  };
}

export interface SectionCt4Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_4_banners';
  info: {
    displayName: 'CT4 Banner';
  };
  attributes: {
    accreditationLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    authorizationLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorizationTagLine: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    downloadButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    enrolledLearners: Schema.Attribute.String;
    features: Schema.Attribute.Component<'component.features', true>;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    rating: Schema.Attribute.Component<
      'landing-page-component.rating-details',
      false
    >;
    registerForDemo: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    thumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    videoUrl: Schema.Attribute.Text;
    viewButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
  };
}

export interface SectionCt5Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_5_banners';
  info: {
    description: '';
    displayName: 'CT5 Banner';
  };
  attributes: {
    becameAnInstructorButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'component.facts', true>;
    heading: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    highlightedHeading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
  };
}

export interface SectionCt6Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_6_banners';
  info: {
    description: '';
    displayName: 'CT6 Banner';
  };
  attributes: {
    badgeName: Schema.Attribute.String;
    badgeTag: Schema.Attribute.Component<'component.image-with-title', false>;
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    downloadCurriculum: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    features: Schema.Attribute.Component<'component.features', true>;
    getQuote: Schema.Attribute.Component<'component.button-details', false>;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.Text;
    highlightDetails: Schema.Attribute.Component<
      'component.highlights-3',
      false
    >;
    highLightedText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    imageTagline: Schema.Attribute.Component<'component.image-tag-lines', true>;
    quoteTagline: Schema.Attribute.String;
    registerForDemo: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    registerForDemoButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
  };
}

export interface SectionCt7Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_7_banners';
  info: {
    description: '';
    displayName: 'CT7 Banner';
  };
  attributes: {
    badgeTag: Schema.Attribute.String;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    enrolledLearners: Schema.Attribute.String;
    enterpriseButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    features: Schema.Attribute.Component<'component.features', true>;
    heading: Schema.Attribute.Text;
    heading2: Schema.Attribute.Text;
    heading3: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    individualButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    ratingDetails: Schema.Attribute.Component<
      'component.rating-details-2',
      true
    >;
    ratings: Schema.Attribute.Component<'component.rating-details-2', false>;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    upskilledDetails: Schema.Attribute.Component<
      'component.upskilled-details',
      true
    >;
  };
}

export interface SectionCt8Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_8_banners';
  info: {
    description: '';
    displayName: 'CT8 Banner';
  };
  attributes: {
    bannerImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    contactButton: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
    DownloadCurriculum: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    enrolledLearnerProfilePics: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    enrolledLearners: Schema.Attribute.String & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'component.features', true> &
      Schema.Attribute.Required;
    getQuote: Schema.Attribute.Component<'component.button-details', false> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    quoteTagLine: Schema.Attribute.String & Schema.Attribute.Required;
    ratingDetails: Schema.Attribute.Component<
      'component.rating-details-3',
      true
    >;
  };
}

export interface SectionCt9Banner extends Struct.ComponentSchema {
  collectionName: 'components_section_ct_9_banners';
  info: {
    displayName: 'CT9 Banner';
  };
  attributes: {
    getTicketsButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'component.stats', false>;
    viewSchedulesButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface SectionCurriculum extends Struct.ComponentSchema {
  collectionName: 'components_section_curricula';
  info: {
    description: '';
    displayName: 'Curriculum';
  };
  attributes: {
    curriculumFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    downloadButton: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    topics: Schema.Attribute.Component<'component.curriculum-topics', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionDemandForCourse extends Struct.ComponentSchema {
  collectionName: 'components_section_demand_for_courses';
  info: {
    displayName: 'Demand For Courses';
  };
  attributes: {
    courseList: Schema.Attribute.Component<
      'component.demand-for-course-details',
      true
    >;
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionDemandIncreased extends Struct.ComponentSchema {
  collectionName: 'components_section_demand_increaseds';
  info: {
    displayName: 'Demand Increased';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    roles: Schema.Attribute.Component<'component.role-wise-increased', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionEBookBeginnerGuide extends Struct.ComponentSchema {
  collectionName: 'components_section_e_book_beginner_guides';
  info: {
    displayName: 'EBook Beginner Guide';
  };
  attributes: {
    downloadButton: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    features: Schema.Attribute.Component<'component.icon-with-title', true>;
    heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionEBooks extends Struct.ComponentSchema {
  collectionName: 'components_section_e_books';
  info: {
    displayName: 'EBooks';
  };
  attributes: {
    ebooksList: Schema.Attribute.Component<'component.e-book-details', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionEndToEndSolutions extends Struct.ComponentSchema {
  collectionName: 'components_section_end_to_end_solutions';
  info: {
    displayName: 'End To End Solutions';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    stepWiseSolutions: Schema.Attribute.Component<
      'component.talent-journey-steps',
      true
    >;
  };
}

export interface SectionEnterpriseReview extends Struct.ComponentSchema {
  collectionName: 'components_section_enterprise_reviews';
  info: {
    displayName: 'Enterprise Review';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    enterprise: Schema.Attribute.Component<
      'component.enterprise-details',
      false
    > &
      Schema.Attribute.Required;
    rating: Schema.Attribute.Integer;
    review: Schema.Attribute.String;
  };
}

export interface SectionEnterprisesAreSaying extends Struct.ComponentSchema {
  collectionName: 'components_section_enterprises_are_sayings';
  info: {
    description: '';
    displayName: 'Enterprises Are Saying';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    reviews: Schema.Attribute.Component<'section.enterprise-review', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionExclusiveBonuses extends Struct.ComponentSchema {
  collectionName: 'components_section_exclusive_bonuses';
  info: {
    description: '';
    displayName: 'Exclusive Bonuses';
  };
  attributes: {
    bonusDetails: Schema.Attribute.Component<'component.bonus-details', true>;
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.Text;
    price: Schema.Attribute.String;
  };
}

export interface SectionFaqDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_details';
  info: {
    description: '';
    displayName: 'FAQ Details';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'component.faqs', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFaqDetailsOnCourse extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_details_on_courses';
  info: {
    displayName: 'FAQ Details On Course';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    roles: Schema.Attribute.Component<'component.faq-detail-role', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionGetCertifiedGetNoticed extends Struct.ComponentSchema {
  collectionName: 'components_section_get_certified_get_noticeds';
  info: {
    description: '';
    displayName: 'Get certified Get noticed';
  };
  attributes: {
    certifiedBy: Schema.Attribute.Component<
      'component.image-with-title',
      true
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionGrowthNumbers extends Struct.ComponentSchema {
  collectionName: 'components_section_growth_numbers';
  info: {
    description: '';
    displayName: 'Growth Numbers';
  };
  attributes: {
    empoweringProfessionals: Schema.Attribute.Component<
      'component.title-with-description-2',
      true
    >;
  };
}

export interface SectionHighlights extends Struct.ComponentSchema {
  collectionName: 'components_section_highlights';
  info: {
    description: '';
    displayName: 'Highlights';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    highlightList: Schema.Attribute.Component<
      'component.highlight-list',
      true
    > &
      Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHorizontalMenu extends Struct.ComponentSchema {
  collectionName: 'components_section_horizontal_menus';
  info: {
    displayName: 'Horizontal menu';
  };
  attributes: {
    downloadButton: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    menus: Schema.Attribute.Component<
      'landing-page-component.menu-bar-detail',
      true
    >;
    scheduleButton: Schema.Attribute.Component<
      'landing-page-component.button-details',
      false
    >;
  };
}

export interface SectionHorizontalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_section_horizontal_navbars';
  info: {
    displayName: 'Horizontal Navbar';
  };
  attributes: {
    menus: Schema.Attribute.Component<'component.left-side-bar-menus', true>;
  };
}

export interface SectionIndustryLeaders extends Struct.ComponentSchema {
  collectionName: 'components_section_industry_leaders';
  info: {
    displayName: 'Industry Leaders';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    teams: Schema.Attribute.Component<'component.management-teams', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionLearnerTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_section_learner_testimonials';
  info: {
    description: '';
    displayName: 'User Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String;
    testimonialReviews: Schema.Attribute.Component<
      'component.testimonial-card',
      true
    >;
  };
}

export interface SectionLearnersOverthenGlobe extends Struct.ComponentSchema {
  collectionName: 'components_section_learners_overthen_globes';
  info: {
    displayName: 'learnersOverthenGlobe';
  };
  attributes: {
    enrolledLearners: Schema.Attribute.Component<
      'section.continental-based-enrolled-learners',
      true
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    specification: Schema.Attribute.Component<
      'component.image-header-description',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionLearningExperience extends Struct.ComponentSchema {
  collectionName: 'components_section_learning_experiences';
  info: {
    displayName: 'Learning Experience';
  };
  attributes: {
    details: Schema.Attribute.Component<
      'component.image-header-description',
      true
    >;
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionLearningHub extends Struct.ComponentSchema {
  collectionName: 'components_section_learning_hubs';
  info: {
    displayName: 'Learning Hub';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    learningDetails: Schema.Attribute.Component<
      'component.learning-hub-tabs',
      true
    >;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionLearningPath extends Struct.ComponentSchema {
  collectionName: 'components_section_learning_paths';
  info: {
    description: '';
    displayName: 'Learning Path';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'component.learning-path-steps', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionLeftSideBarMenu2 extends Struct.ComponentSchema {
  collectionName: 'components_component_left_side_bar_menu_2s';
  info: {
    description: '';
    displayName: 'Left Side Bar Menu 2';
  };
  attributes: {
    contactAdvisorButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    getStartedButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    menus: Schema.Attribute.Component<'component.left-side-bar-menus', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionLeftSideBarMenus extends Struct.ComponentSchema {
  collectionName: 'components_section_left_side_bar_menus';
  info: {
    description: '';
    displayName: 'Left Side Bar Menus';
  };
  attributes: {
    contactButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    menus: Schema.Attribute.Component<'component.left-side-bar-menus', true> &
      Schema.Attribute.Required;
    trainingDetails: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface SectionMeetTheTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_meet_the_teams';
  info: {
    description: '';
    displayName: 'Meet The Team Details';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    roles: Schema.Attribute.Component<
      'component.meet-the-team-role-list',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionMeetTheTeamMoreDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_meet_the_team_more_details';
  info: {
    displayName: 'Meet The Team More Details';
  };
  attributes: {
    achievements: Schema.Attribute.Component<
      'blog-component.feature-with-icon',
      true
    >;
    heading: Schema.Attribute.String;
    instructors: Schema.Attribute.Component<
      'component.meet-the-team-roles',
      true
    >;
    passPercenatge: Schema.Attribute.BigInteger;
    passPercenatgeTitle: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    progressTagLine: Schema.Attribute.Text;
    scheduleACallButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
  };
}

export interface SectionMeetTheTeamMoreDetails2 extends Struct.ComponentSchema {
  collectionName: 'components_section_meet_the_team_details_2s';
  info: {
    displayName: 'Meet The Team Details 2';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String;
    userReviews: Schema.Attribute.Component<
      'component.meet-the-team-roles',
      true
    >;
  };
}

export interface SectionMeetTheTeamSuccess extends Struct.ComponentSchema {
  collectionName: 'components_section_meet_the_team_successes';
  info: {
    description: '';
    displayName: 'Meet the team success';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    profile: Schema.Attribute.Component<'component.team-profile', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionOurClients extends Struct.ComponentSchema {
  collectionName: 'components_section_our_clients';
  info: {
    displayName: 'Our Clients';
  };
  attributes: {
    clientList: Schema.Attribute.Component<'component.image-with-title', true>;
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.Text;
  };
}

export interface SectionOurProcess extends Struct.ComponentSchema {
  collectionName: 'components_section_our_processes';
  info: {
    displayName: 'Our Process';
  };
  attributes: {
    heading: Schema.Attribute.String;
    overView: Schema.Attribute.Component<'component.image-with-title', true>;
    preHeading: Schema.Attribute.String;
    workflow: Schema.Attribute.Component<'component.points', true>;
  };
}

export interface SectionOurSupportSystem extends Struct.ComponentSchema {
  collectionName: 'components_section_our_support_systems';
  info: {
    description: '';
    displayName: 'Our Support System';
  };
  attributes: {
    experts: Schema.Attribute.Component<
      'component.support-team-details',
      true
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    specification: Schema.Attribute.Component<
      'component.image-header-description',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionPopUpDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_pop_up_details';
  info: {
    displayName: 'Pop up details';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    features: Schema.Attribute.Component<'component.features', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionPrerequisitesForTraining
  extends Struct.ComponentSchema {
  collectionName: 'components_section_prerequisites_for_trainings';
  info: {
    description: '';
    displayName: 'Prerequisites For Training';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    prerequisite: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SectionPrimaryHighlights extends Struct.ComponentSchema {
  collectionName: 'components_section_primary_highlights';
  info: {
    displayName: 'Primary Highlights';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    highlightList: Schema.Attribute.Component<'component.highlights-2', true>;
    preHeading: Schema.Attribute.Text;
  };
}

export interface SectionProjectManagementTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_project_management_teams';
  info: {
    description: '';
    displayName: 'Project Management Team';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    discountTag: Schema.Attribute.String;
    discountTagDetails: Schema.Attribute.Component<
      'component.discount-tag-details',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    teamHighlights: Schema.Attribute.Component<
      'component.highlight-list',
      true
    > &
      Schema.Attribute.Required;
    teams: Schema.Attribute.Component<'component.management-teams', true> &
      Schema.Attribute.Required;
    upSkillTagLine: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionQuickFacts extends Struct.ComponentSchema {
  collectionName: 'components_section_quick_facts';
  info: {
    description: '';
    displayName: 'Quick Facts';
  };
  attributes: {
    description: Schema.Attribute.Text;
    facts: Schema.Attribute.Component<'component.facts', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionRecommendedArticles extends Struct.ComponentSchema {
  collectionName: 'components_section_recommended_articles';
  info: {
    description: '';
    displayName: 'Recommended Articles';
  };
  attributes: {
    articles: Schema.Attribute.Component<'component.e-book-details', true>;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionRecommendedCourse extends Struct.ComponentSchema {
  collectionName: 'components_section_recommended_courses';
  info: {
    displayName: 'Recommended Course';
  };
  attributes: {
    courses: Schema.Attribute.Component<
      'component.recommended-course-details',
      true
    >;
    exploreAllCoursesButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    viewAllAgileCourses: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface SectionRelatedCourses extends Struct.ComponentSchema {
  collectionName: 'components_section_related_courses';
  info: {
    displayName: 'Related Courses';
  };
  attributes: {
    courses: Schema.Attribute.Component<'component.list', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionReviewDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_review_details';
  info: {
    description: '';
    displayName: 'Review Details';
  };
  attributes: {
    filteredOptions: Schema.Attribute.JSON & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
    reviews: Schema.Attribute.Component<'component.reviews', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionSkillMastery extends Struct.ComponentSchema {
  collectionName: 'components_section_skill_masteries';
  info: {
    displayName: 'Skill Mastery';
  };
  attributes: {
    categoryWiseSkills: Schema.Attribute.Component<
      'assessment-components.assessment-categories',
      false
    >;
    description: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionSlotDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_slot_details';
  info: {
    displayName: 'slot Details';
  };
  attributes: {
    slots: Schema.Attribute.Component<'component.slots', true>;
    timezone: Schema.Attribute.Relation<'oneToOne', 'api::timezone.timezone'>;
  };
}

export interface SectionSocialNetworkRatings extends Struct.ComponentSchema {
  collectionName: 'components_section_social_network_ratings';
  info: {
    displayName: 'Social Network Ratings';
  };
  attributes: {
    ratings: Schema.Attribute.Component<
      'component.social-network-ratings',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionSuperiorOutcome extends Struct.ComponentSchema {
  collectionName: 'components_section_superior_outcomes';
  info: {
    description: '';
    displayName: 'Superior outcome';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    outComes: Schema.Attribute.Component<
      'component.image-header-description',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionTalkToAnAdvisor extends Struct.ComponentSchema {
  collectionName: 'components_section_talk_to_an_advisors';
  info: {
    displayName: 'Talk to An Advisor';
  };
  attributes: {
    contactNumber: Schema.Attribute.String;
    contactTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    formType: Schema.Attribute.Enumeration<
      ['scheduleButtonView', 'talkToOurAdvisorView']
    >;
    heading: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    tagInfo: Schema.Attribute.Text;
  };
}

export interface SectionTechSkillsCta extends Struct.ComponentSchema {
  collectionName: 'components_section_tech_skills_ctas';
  info: {
    displayName: 'Tech Skills CTA';
  };
  attributes: {
    downloadBrochure: Schema.Attribute.Component<
      'landing-page-component.download-button',
      false
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preHeading: Schema.Attribute.String;
    requestDemoButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface SectionToolsCovered extends Struct.ComponentSchema {
  collectionName: 'components_section_tools_covereds';
  info: {
    displayName: 'Tools Covered';
  };
  attributes: {
    companyImages: Schema.Attribute.Component<
      'component.image-with-title',
      true
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionTrainingOptions extends Struct.ComponentSchema {
  collectionName: 'components_section_training_options';
  info: {
    displayName: 'Training Options';
  };
  attributes: {
    enableGroupDiscussionTag: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionTrendingCourses extends Struct.ComponentSchema {
  collectionName: 'components_section_trending_courses';
  info: {
    displayName: 'Trending Courses';
  };
  attributes: {
    courses: Schema.Attribute.Component<'component.list', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionTrendingCoursesInOtherCities
  extends Struct.ComponentSchema {
  collectionName: 'components_section_trending_courses_in_other_cities';
  info: {
    displayName: 'Trending Courses in Other Cities';
  };
  attributes: {
    courses: Schema.Attribute.Component<'component.list', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionUspSOrWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_section_usp_s_or_why_us_s';
  info: {
    description: '';
    displayName: 'USP\u2019s or Why Us?';
  };
  attributes: {
    details: Schema.Attribute.Component<'component.quick-fact-details', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionWhatSetsTechademy extends Struct.ComponentSchema {
  collectionName: 'components_section_what_sets_techademies';
  info: {
    displayName: 'What Sets Techademy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<
      'component.image-header-description',
      true
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionWhatYouWillLearn extends Struct.ComponentSchema {
  collectionName: 'components_section_what_you_will_learn_s';
  info: {
    displayName: 'What You Will Learn?';
  };
  attributes: {
    becomeProjectManagerButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    heading: Schema.Attribute.Text;
    learningDeatils: Schema.Attribute.Component<'component.advantages-2', true>;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionWhoShouldAttendCourse extends Struct.ComponentSchema {
  collectionName: 'components_section_who_should_attend_courses';
  info: {
    description: '';
    displayName: 'Who Should Attend Course';
  };
  attributes: {
    features: Schema.Attribute.Component<'component.features', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionWhyProfela extends Struct.ComponentSchema {
  collectionName: 'components_section_why_profelas';
  info: {
    description: '';
    displayName: 'Why Profela';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'component.advantages', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionWhyTeachAtProfela extends Struct.ComponentSchema {
  collectionName: 'components_section_why_teach_at_profelas';
  info: {
    displayName: 'Why Teach At Profela';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'component.advantages', true>;
    heading: Schema.Attribute.String;
    joinUsButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    preHeading: Schema.Attribute.String;
  };
}

export interface SectionWhyTechademy extends Struct.ComponentSchema {
  collectionName: 'components_section_why_techademies';
  info: {
    description: '';
    displayName: 'Why Techademy';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'component.advantages-2', true>;
    heading: Schema.Attribute.Text;
    preHeading: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface WebinarComponentBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_banner_sections';
  info: {
    description: '';
    displayName: 'Banner Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    bannerLabel: Schema.Attribute.String;
    bannerSubLabel: Schema.Attribute.String;
    benefits: Schema.Attribute.Component<'component.check-list', true>;
    features: Schema.Attribute.Component<'component.check-list', true>;
    isFree: Schema.Attribute.Component<'component.check-list', false>;
    label_icon: Schema.Attribute.Media<'images'>;
    mobileImage: Schema.Attribute.Media<'images'>;
    redirectUrl: Schema.Attribute.Component<'component.redirection-url', false>;
    registerButton: Schema.Attribute.Component<'component.register', false>;
    registerFreeButton: Schema.Attribute.Component<'component.register', false>;
    webImage: Schema.Attribute.Media<'images'>;
  };
}

export interface WebinarComponentBeforeAfterSuccess
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_before_after_successes';
  info: {
    displayName: 'Before After Success';
  };
  attributes: {
    after: Schema.Attribute.Component<'component.image-with-title', false>;
    before: Schema.Attribute.Component<'component.image-with-title', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarComponentBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_blog_sections';
  info: {
    description: '';
    displayName: 'Blog Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    label: Schema.Attribute.String;
    postImage: Schema.Attribute.Media<'images'>;
    profile: Schema.Attribute.Component<'component.user-profile', false>;
    redirectUrl: Schema.Attribute.Component<'component.redirection-url', false>;
  };
}

export interface WebinarComponentBonusCard extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_bonus_cards';
  info: {
    description: '';
    displayName: 'Bonus Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    highlightedText: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
    labelIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WebinarComponentButtonWithSubTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_button_with_sub_titles';
  info: {
    displayName: 'Button With SubTitle';
  };
  attributes: {
    name: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    subName: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['href', 'button']>;
  };
}

export interface WebinarComponentCareerTransitionDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_career_transition_d';
  info: {
    description: '';
    displayName: 'Career Transition Details';
  };
  attributes: {
    beforeAfterSuccess: Schema.Attribute.Component<
      'webinar-component.before-after-success',
      false
    >;
    label: Schema.Attribute.Component<'component.icon-with-title', false>;
    profile: Schema.Attribute.Component<'webinar-component.profile', false>;
  };
}

export interface WebinarComponentFeatureWithIcon
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_feature_with_icons';
  info: {
    displayName: 'Feature With Icon';
  };
  attributes: {
    feature: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarComponentHighlightSection
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_highlight_sections';
  info: {
    displayName: 'Highlight Section';
  };
  attributes: {
    freeGiftBtn: Schema.Attribute.Component<'component.register', false>;
    highlightsList: Schema.Attribute.Component<'component.check-list', true>;
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface WebinarComponentHighlights extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    feature: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarComponentIconTitleColorCode
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_icon_title_color_codes';
  info: {
    displayName: 'Icon Title ColorCode';
  };
  attributes: {
    colorCode: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface WebinarComponentInfoDetails extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_info_details';
  info: {
    displayName: 'Info Details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface WebinarComponentInputWithMultiSelect
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_input_with_multi_selects';
  info: {
    displayName: 'Input With MultiSelect';
  };
  attributes: {
    time: Schema.Attribute.String;
    timezones: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['EDT', 'PDT', 'CDT', 'EST', 'CST', 'MST', 'MDT']
      >;
  };
}

export interface WebinarComponentKeyPoints extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_key_points';
  info: {
    displayName: 'Key Points';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Blocks;
  };
}

export interface WebinarComponentListOfWorkforce
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_list_of_workforces';
  info: {
    description: '';
    displayName: 'Workforce Section';
  };
  attributes: {
    label: Schema.Attribute.String;
    success_statistics: Schema.Attribute.Component<
      'component.text-value',
      true
    >;
    text: Schema.Attribute.String;
    workForceUserProfile: Schema.Attribute.Component<
      'component.user-profile',
      true
    >;
  };
}

export interface WebinarComponentProfile extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_profiles';
  info: {
    displayName: 'Profile';
  };
  attributes: {
    dateOfJoining: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface WebinarComponentSaleBanner extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_sale_banners';
  info: {
    displayName: 'Sale Banner';
  };
  attributes: {
    colorCode: Schema.Attribute.String;
    heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarComponentSidebarSection extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_sidebar_sections';
  info: {
    displayName: 'Sidebar Section';
  };
  attributes: {
    candidateCountText: Schema.Attribute.Component<
      'component.check-list',
      false
    >;
    formButton: Schema.Attribute.Component<'component.register', false>;
    webinarForm: Schema.Attribute.Component<'component.text-value', false>;
  };
}

export interface WebinarComponentSuccessStorySection
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_success_story_sections';
  info: {
    description: '';
    displayName: 'Success Story Section';
  };
  attributes: {
    label: Schema.Attribute.String;
    successStoryPost: Schema.Attribute.Component<
      'component.comment-blog',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WebinarComponentThankYouPage extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_thank_you_page_s';
  info: {
    description: '';
    displayName: 'Thank You Page ';
  };
  attributes: {
    confirmationDetails: Schema.Attribute.Component<
      'component.icon-with-title',
      true
    >;
    date: Schema.Attribute.String;
    getLatestUpdates: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'component.icon-with-title', false>;
    heading2: Schema.Attribute.String;
    heading3: Schema.Attribute.String;
    socialMediaButton: Schema.Attribute.Component<
      'component.button-with-icon',
      false
    >;
    time: Schema.Attribute.Blocks;
    videoThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    videoUrl: Schema.Attribute.String;
  };
}

export interface WebinarComponentToolsOfExpertise
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_tools_of_expertises';
  info: {
    displayName: 'Tools Of Expertise';
  };
  attributes: {
    title: Schema.Attribute.Text;
    tools: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface WebinarComponentTrustedVoices extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_trusted_voices';
  info: {
    displayName: 'Trusted Voices';
  };
  attributes: {
    highlights: Schema.Attribute.Component<'component.advantages', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarComponentUserDetails extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_user_details';
  info: {
    description: '';
    displayName: 'User Details';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    date: Schema.Attribute.DateTime;
    designation: Schema.Attribute.String;
    isVerified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.Text;
    review: Schema.Attribute.Decimal;
    reviewDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    reviewTitle: Schema.Attribute.String;
  };
}

export interface WebinarComponentVideoContentBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_video_content_blocks';
  info: {
    displayName: 'Video Content Block';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['youtube']>;
  };
}

export interface WebinarComponentWebinarDetails extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_webinar_details';
  info: {
    displayName: 'Webinar Details';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false>;
    date: Schema.Attribute.Date;
    from: Schema.Attribute.Time;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    registeredCount: Schema.Attribute.BigInteger;
    to: Schema.Attribute.Time;
  };
}

export interface WebinarComponentWebinarFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_component_webinar_features';
  info: {
    description: '';
    displayName: 'Webinar Features';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'webinar-component.feature-with-icon',
      true
    >;
    featureType: Schema.Attribute.Enumeration<['post', 'video', 'image']>;
    freeRegistrationButton: Schema.Attribute.Component<
      'webinar-component.button-with-sub-title',
      false
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoUrl: Schema.Attribute.String;
    webinarStartsAt: Schema.Attribute.DateTime;
  };
}

export interface WebinarSectionAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_about_uses';
  info: {
    displayName: 'About Us';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface WebinarSectionAboutWebinar extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_about_webinars';
  info: {
    displayName: 'About Webinar';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface WebinarSectionCareerBenifits extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_career_benifits';
  info: {
    displayName: 'Career Benifits';
  };
  attributes: {
    becomeProjectManagerButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    benefitsList: Schema.Attribute.Component<
      'webinar-component.info-details',
      true
    >;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarSectionCareerTransition extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_career_transitions';
  info: {
    displayName: 'Career Transition';
  };
  attributes: {
    heading: Schema.Attribute.String;
    learnerDetails: Schema.Attribute.Component<
      'webinar-component.career-transition-details',
      true
    >;
  };
}

export interface WebinarSectionExclusiveBonusPack
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_exclusive_bonus_packs';
  info: {
    displayName: 'Exclusive Bonus Pack';
  };
  attributes: {
    becomeProjectManagerButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    bonusList: Schema.Attribute.Component<'webinar-component.bonus-card', true>;
    heading: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarSectionFaqDetails extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_faq_details';
  info: {
    displayName: 'FAQ Details';
  };
  attributes: {
    becomeProjectManagerButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    faqs: Schema.Attribute.Component<'component.faqs', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface WebinarSectionFaqDetailsOnWebinar
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_faq_details_on_webinars';
  info: {
    displayName: 'FAQ Details On Webinar';
  };
  attributes: {
    categoryWiseFaqs: Schema.Attribute.Component<
      'component.faq-detail-role',
      true
    >;
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
  };
}

export interface WebinarSectionHorizontalMenu extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_horizontal_menus';
  info: {
    displayName: 'Horizontal Menu';
  };
  attributes: {
    menus: Schema.Attribute.Component<'component.left-side-bar-menus', true>;
  };
}

export interface WebinarSectionKnowYourMentors extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_know_your_mentors';
  info: {
    description: '';
    displayName: 'Know Your Mentors';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mentorExperience: Schema.Attribute.Component<
      'webinar-component.highlights',
      true
    >;
    mentorHighlights: Schema.Attribute.Component<'component.advantages', true>;
    mentorProfile: Schema.Attribute.Component<
      'webinar-component.info-details',
      true
    >;
    toolsExpertiseIn: Schema.Attribute.Component<
      'webinar-component.tools-of-expertise',
      true
    >;
  };
}

export interface WebinarSectionLiveTrainingPromo
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_live_training_promos';
  info: {
    displayName: 'Live Training Promo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    promoCountDown: Schema.Attribute.DateTime;
    promoText: Schema.Attribute.String;
    reserveYourSpotButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface WebinarSectionMeetTheTrainer extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_meet_the_trainers';
  info: {
    displayName: 'Meet The Trainer';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    profile: Schema.Attribute.Component<'component.team-profile', false>;
  };
}

export interface WebinarSectionProfessionalTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_professional_testimonials';
  info: {
    description: '';
    displayName: 'Professional Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    professionalsReviewDetails: Schema.Attribute.Component<
      'webinar-component.user-details',
      true
    >;
    videoContentBlock: Schema.Attribute.Component<
      'webinar-component.video-content-block',
      true
    >;
  };
}

export interface WebinarSectionRecommendedWebinars
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_recommended_webinars';
  info: {
    description: '';
    displayName: 'Recommended Webinars';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.Component<
      'webinar-component.icon-title-color-code',
      false
    >;
    webinarList: Schema.Attribute.Component<
      'webinar-component.webinar-details',
      true
    >;
  };
}

export interface WebinarSectionStickyFooter extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_sticky_footers';
  info: {
    displayName: 'Sticky Footer';
  };
  attributes: {
    countDownText: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.String;
    priceLabel: Schema.Attribute.String;
    secureYourFreeSpotButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
  };
}

export interface WebinarSectionUnlockTheAiAdvantage
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_unlock_the_ai_advantages';
  info: {
    description: '';
    displayName: 'Unlock the AI Advantage';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'component.icon-with-title', true>;
    becomeProjectManagerButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    speakerShowcase: Schema.Attribute.Component<
      'webinar-component.trusted-voices',
      false
    >;
  };
}

export interface WebinarSectionWebinars extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_webinars';
  info: {
    displayName: 'Webinars';
  };
  attributes: {
    webinarList: Schema.Attribute.Component<
      'webinar-component.webinar-details',
      true
    >;
  };
}

export interface WebinarSectionWhatWillYouLearn extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_what_will_you_learn_s';
  info: {
    description: '';
    displayName: 'What Will You Learn?';
  };
  attributes: {
    becomeProjectManagerButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    learningDetails: Schema.Attribute.Component<'component.advantages-2', true>;
  };
}

export interface WebinarSectionWhatYouWillGain extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_what_you_will_gains';
  info: {
    displayName: 'What You Will Gain';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'component.icon-with-title', true>;
    heading: Schema.Attribute.String;
  };
}

export interface WebinarSectionWhoCanAttend extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_who_can_attends';
  info: {
    displayName: 'Who Can Attend';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'component.icon-with-title', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarSectionWhoShouldAttendWorkshop
  extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_who_should_attend_ws';
  info: {
    displayName: 'Who Should Attend Workshop';
  };
  attributes: {
    features: Schema.Attribute.Component<'component.advantages', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    trustedVoices: Schema.Attribute.Component<
      'webinar-component.trusted-voices',
      true
    >;
  };
}

export interface WebinarSectionWhyThisCourse extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_why_this_courses';
  info: {
    description: '';
    displayName: 'Why This Course';
  };
  attributes: {
    becomeProjectManagerButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    heading: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<
      'webinar-component.highlights',
      true
    >;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface WebinarSectionWhyThisProgram extends Struct.ComponentSchema {
  collectionName: 'components_webinar_section_why_this_programs';
  info: {
    displayName: 'Why This Program';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    programAdvantages: Schema.Attribute.Component<'component.advantages', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'assessment-components.assessment-categories': AssessmentComponentsAssessmentCategories;
      'assessment-components.highlight-block': AssessmentComponentsHighlightBlock;
      'assessment-components.service-request-cta': AssessmentComponentsServiceRequestCta;
      'assessment-components.tailored-plans-details': AssessmentComponentsTailoredPlansDetails;
      'assessment-section.how-to-use-the-platform': AssessmentSectionHowToUseThePlatform;
      'assessment-section.onboarding-steps': AssessmentSectionOnboardingSteps;
      'assessment-section.our-features': AssessmentSectionOurFeatures;
      'assessment-section.proven-performance': AssessmentSectionProvenPerformance;
      'assessment-section.tailored-assessment-solutions': AssessmentSectionTailoredAssessmentSolutions;
      'assessment-section.tailored-plans': AssessmentSectionTailoredPlans;
      'blog-component.button-details': BlogComponentButtonDetails;
      'blog-component.code-text-editor': BlogComponentCodeTextEditor;
      'blog-component.feature': BlogComponentFeature;
      'blog-component.feature-with-icon': BlogComponentFeatureWithIcon;
      'blog-component.image': BlogComponentImage;
      'blog-component.recommended-course-details': BlogComponentRecommendedCourseDetails;
      'blog-component.resource-details': BlogComponentResourceDetails;
      'blog-component.social-media-links': BlogComponentSocialMediaLinks;
      'blog-component.table-of-content-item': BlogComponentTableOfContentItem;
      'blog-section.background-highlight-block': BlogSectionBackgroundHighlightBlock;
      'blog-section.blog-definition': BlogSectionBlogDefinition;
      'blog-section.comparison-table': BlogSectionComparisonTable;
      'blog-section.comparison-table-details': BlogSectionComparisonTableDetails;
      'blog-section.content-banner': BlogSectionContentBanner;
      'blog-section.free-guide-button': BlogSectionFreeGuideButton;
      'blog-section.highlight-block': BlogSectionHighlightBlock;
      'blog-section.learning-resourse': BlogSectionLearningResourse;
      'blog-section.recommended-blogs': BlogSectionRecommendedBlogs;
      'blog-section.recommended-course': BlogSectionRecommendedCourse;
      'blog-section.recommended-courses': BlogSectionRecommendedCourses;
      'blog-section.related-articles': BlogSectionRelatedArticles;
      'blog-section.signup-newsletter': BlogSectionSignupNewsletter;
      'blog-section.table-of-contents': BlogSectionTableOfContents;
      'blog-section.title-description-with-ad': BlogSectionTitleDescriptionWithAd;
      'blog-section.title-with-description': BlogSectionTitleWithDescription;
      'blog-section.video-content-block': BlogSectionVideoContentBlock;
      'component.about-certification-questions': ComponentAboutCertificationQuestions;
      'component.advantages': ComponentAdvantages;
      'component.advantages-2': ComponentAdvantages2;
      'component.advantages-3': ComponentAdvantages3;
      'component.banner-team': ComponentBannerTeam;
      'component.bonus-details': ComponentBonusDetails;
      'component.button-details': ComponentButtonDetails;
      'component.button-with-icon': ComponentButtonWithIcon;
      'component.career-success-stories-list': ComponentCareerSuccessStoriesList;
      'component.career-success-story-company': ComponentCareerSuccessStoryCompany;
      'component.certified-professional-role': ComponentCertifiedProfessionalRole;
      'component.certified-professional-role-list': ComponentCertifiedProfessionalRoleList;
      'component.check-list': ComponentCheckList;
      'component.comment-blog': ComponentCommentBlog;
      'component.contact': ComponentContact;
      'component.course-fee-currency-wise': ComponentCourseFeeCurrencyWise;
      'component.course-fee-plans': ComponentCourseFeePlans;
      'component.course-overview': ComponentCourseOverview;
      'component.course-price': ComponentCoursePrice;
      'component.course-track-details': ComponentCourseTrackDetails;
      'component.course-track-overview': ComponentCourseTrackOverview;
      'component.cta-content-block': ComponentCtaContentBlock;
      'component.curriculum-topics': ComponentCurriculumTopics;
      'component.demand-for-course-details': ComponentDemandForCourseDetails;
      'component.demand-for-course-list': ComponentDemandForCourseList;
      'component.discount-tag-details': ComponentDiscountTagDetails;
      'component.e-book-details': ComponentEBookDetails;
      'component.enterprise-details': ComponentEnterpriseDetails;
      'component.exit-popup': ComponentExitPopup;
      'component.facts': ComponentFacts;
      'component.faq-detail-role': ComponentFaqDetailRole;
      'component.faqs': ComponentFaqs;
      'component.features': ComponentFeatures;
      'component.flexi-pass-card': ComponentFlexiPassCard;
      'component.form': ComponentForm;
      'component.got-a-question': ComponentGotAQuestion;
      'component.group-discount': ComponentGroupDiscount;
      'component.header-item': ComponentHeaderItem;
      'component.header-sub-item': ComponentHeaderSubItem;
      'component.highlight-list': ComponentHighlightList;
      'component.highlight-summary': ComponentHighlightSummary;
      'component.highlighted-text': ComponentHighlightedText;
      'component.highlights-2': ComponentHighlights2;
      'component.highlights-3': ComponentHighlights3;
      'component.icon-with-ckeditor': ComponentIconWithCkeditor;
      'component.icon-with-title': ComponentIconWithTitle;
      'component.image-header-description': ComponentImageHeaderDescription;
      'component.image-tag-lines': ComponentImageTagLines;
      'component.image-with-description': ComponentImageWithDescription;
      'component.image-with-title': ComponentImageWithTitle;
      'component.info-details': ComponentInfoDetails;
      'component.learner-testimonials-map': ComponentLearnerTestimonialsMap;
      'component.learning-hub-tabs': ComponentLearningHubTabs;
      'component.learning-path-steps': ComponentLearningPathSteps;
      'component.left-side-bar-menus': ComponentLeftSideBarMenus;
      'component.list': ComponentList;
      'component.management-teams': ComponentManagementTeams;
      'component.meet-the-team-role-list': ComponentMeetTheTeamRoleList;
      'component.meet-the-team-roles': ComponentMeetTheTeamRoles;
      'component.mega-menu-course-category': ComponentMegaMenuCourseCategory;
      'component.mega-menu-course-detail': ComponentMegaMenuCourseDetail;
      'component.points': ComponentPoints;
      'component.prerequisites': ComponentPrerequisites;
      'component.professional-section': ComponentProfessionalSection;
      'component.professions': ComponentProfessions;
      'component.quick-fact-details': ComponentQuickFactDetails;
      'component.rating-details': ComponentRatingDetails;
      'component.rating-details-2': ComponentRatingDetails2;
      'component.rating-details-3': ComponentRatingDetails3;
      'component.recommended-course-details': ComponentRecommendedCourseDetails;
      'component.redirection-url': ComponentRedirectionUrl;
      'component.register': ComponentRegister;
      'component.review-user': ComponentReviewUser;
      'component.reviews': ComponentReviews;
      'component.role-wise-increased': ComponentRoleWiseIncreased;
      'component.sale-banner': ComponentSaleBanner;
      'component.slots': ComponentSlots;
      'component.social-links': ComponentSocialLinks;
      'component.social-network-ratings': ComponentSocialNetworkRatings;
      'component.stats': ComponentStats;
      'component.support-team-details': ComponentSupportTeamDetails;
      'component.talent-journey-details': ComponentTalentJourneyDetails;
      'component.talent-journey-steps': ComponentTalentJourneySteps;
      'component.team-profile': ComponentTeamProfile;
      'component.testimonial-card': ComponentTestimonialCard;
      'component.text-value': ComponentTextValue;
      'component.title-with-description': ComponentTitleWithDescription;
      'component.title-with-description-2': ComponentTitleWithDescription2;
      'component.trusted-by-companies': ComponentTrustedByCompanies;
      'component.upgrade-plan': ComponentUpgradePlan;
      'component.upgrade-plan-pop-up': ComponentUpgradePlanPopUp;
      'component.upskilled-card': ComponentUpskilledCard;
      'component.upskilled-details': ComponentUpskilledDetails;
      'component.user-profile': ComponentUserProfile;
      'component.user-upskilling-journey': ComponentUserUpskillingJourney;
      'event-component.advertise-with-us': EventComponentAdvertiseWithUs;
      'event-component.become-an-speaker': EventComponentBecomeAnSpeaker;
      'event-component.card-carousel': EventComponentCardCarousel;
      'event-component.connect-options': EventComponentConnectOptions;
      'event-component.event-summary-details': EventComponentEventSummaryDetails;
      'event-component.overview': EventComponentOverview;
      'event-component.participant-details': EventComponentParticipantDetails;
      'event-component.profile-card': EventComponentProfileCard;
      'event-section.conference-tracks': EventSectionConferenceTracks;
      'event-section.daily-news-letter': EventSectionDailyNewsLetter;
      'event-section.event-insights': EventSectionEventInsights;
      'event-section.event-summary': EventSectionEventSummary;
      'event-section.faq-details': EventSectionFaqDetails;
      'event-section.global-speakers': EventSectionGlobalSpeakers;
      'event-section.join-the-comunity': EventSectionJoinTheComunity;
      'event-section.our-sponsers': EventSectionOurSponsers;
      'event-section.partner-with-us': EventSectionPartnerWithUs;
      'event-section.promate-and-connect': EventSectionPromateAndConnect;
      'event-section.what-participants-say-about-us': EventSectionWhatParticipantsSayAboutUs;
      'event-section.what-s-new': EventSectionWhatSNew;
      'event-section.why-attend': EventSectionWhyAttend;
      'footer.blog-categories': FooterBlogCategories;
      'footer.categories': FooterCategories;
      'footer.company-links': FooterCompanyLinks;
      'footer.courses': FooterCourses;
      'footer.links': FooterLinks;
      'footer.media-links': FooterMediaLinks;
      'footer.partner-with-us': FooterPartnerWithUs;
      'footer.policies': FooterPolicies;
      'footer.resources': FooterResources;
      'footer.social-links': FooterSocialLinks;
      'footer.support': FooterSupport;
      'footer.support-contact': FooterSupportContact;
      'landing-page-component.button-details': LandingPageComponentButtonDetails;
      'landing-page-component.coupon-button': LandingPageComponentCouponButton;
      'landing-page-component.course-template-1-components-dropdown': LandingPageComponentCourseTemplate1ComponentsDropdown;
      'landing-page-component.download-button': LandingPageComponentDownloadButton;
      'landing-page-component.expert-call-form': LandingPageComponentExpertCallForm;
      'landing-page-component.facts': LandingPageComponentFacts;
      'landing-page-component.feature': LandingPageComponentFeature;
      'landing-page-component.highlights': LandingPageComponentHighlights;
      'landing-page-component.menu-bar-detail': LandingPageComponentMenuBarDetail;
      'landing-page-component.rating-details': LandingPageComponentRatingDetails;
      'landing-page-component.remove-course-components': LandingPageComponentRemoveCourseComponents;
      'landing-page-section.course-features': LandingPageSectionCourseFeatures;
      'landing-page-section.landing-page-banner': LandingPageSectionLandingPageBanner;
      'landing-page-section.lp-highlights': LandingPageSectionLpHighlights;
      'landing-page-section.lp-horizontal-menu': LandingPageSectionLpHorizontalMenu;
      'landing-page-section.lp-meet-the-team-details': LandingPageSectionLpMeetTheTeamDetails;
      'landing-page-section.quick-facts': LandingPageSectionQuickFacts;
      'landing-page-section.talk-to-an-advisor': LandingPageSectionTalkToAnAdvisor;
      'landing-page-section.top-menu-bar': LandingPageSectionTopMenuBar;
      'section.about-certification': SectionAboutCertification;
      'section.about-e-book': SectionAboutEBook;
      'section.academies': SectionAcademies;
      'section.business-impact': SectionBusinessImpact;
      'section.career-success-stories': SectionCareerSuccessStories;
      'section.case-studies': SectionCaseStudies;
      'section.certification-details': SectionCertificationDetails;
      'section.certified-professionals': SectionCertifiedProfessionals;
      'section.challenge-your-workforce': SectionChallengeYourWorkforce;
      'section.continental-based-enrolled-learners': SectionContinentalBasedEnrolledLearners;
      'section.course-certification': SectionCourseCertification;
      'section.course-fee': SectionCourseFee;
      'section.course-summary': SectionCourseSummary;
      'section.courses-we-have': SectionCoursesWeHave;
      'section.ct-1-banner': SectionCt1Banner;
      'section.ct-10-banner': SectionCt10Banner;
      'section.ct-11-banner': SectionCt11Banner;
      'section.ct-12-banner': SectionCt12Banner;
      'section.ct-13-banner': SectionCt13Banner;
      'section.ct-14-banner': SectionCt14Banner;
      'section.ct-15-banner': SectionCt15Banner;
      'section.ct-16-banner': SectionCt16Banner;
      'section.ct-17-banner': SectionCt17Banner;
      'section.ct-18-banner': SectionCt18Banner;
      'section.ct-2-banner': SectionCt2Banner;
      'section.ct-3-banner': SectionCt3Banner;
      'section.ct-4-banner': SectionCt4Banner;
      'section.ct-5-banner': SectionCt5Banner;
      'section.ct-6-banner': SectionCt6Banner;
      'section.ct-7-banner': SectionCt7Banner;
      'section.ct-8-banner': SectionCt8Banner;
      'section.ct-9-banner': SectionCt9Banner;
      'section.curriculum': SectionCurriculum;
      'section.demand-for-course': SectionDemandForCourse;
      'section.demand-increased': SectionDemandIncreased;
      'section.e-book-beginner-guide': SectionEBookBeginnerGuide;
      'section.e-books': SectionEBooks;
      'section.end-to-end-solutions': SectionEndToEndSolutions;
      'section.enterprise-review': SectionEnterpriseReview;
      'section.enterprises-are-saying': SectionEnterprisesAreSaying;
      'section.exclusive-bonuses': SectionExclusiveBonuses;
      'section.faq-details': SectionFaqDetails;
      'section.faq-details-on-course': SectionFaqDetailsOnCourse;
      'section.get-certified-get-noticed': SectionGetCertifiedGetNoticed;
      'section.growth-numbers': SectionGrowthNumbers;
      'section.highlights': SectionHighlights;
      'section.horizontal-menu': SectionHorizontalMenu;
      'section.horizontal-navbar': SectionHorizontalNavbar;
      'section.industry-leaders': SectionIndustryLeaders;
      'section.learner-testimonials': SectionLearnerTestimonials;
      'section.learners-overthen-globe': SectionLearnersOverthenGlobe;
      'section.learning-experience': SectionLearningExperience;
      'section.learning-hub': SectionLearningHub;
      'section.learning-path': SectionLearningPath;
      'section.left-side-bar-menu-2': SectionLeftSideBarMenu2;
      'section.left-side-bar-menus': SectionLeftSideBarMenus;
      'section.meet-the-team': SectionMeetTheTeam;
      'section.meet-the-team-more-details': SectionMeetTheTeamMoreDetails;
      'section.meet-the-team-more-details-2': SectionMeetTheTeamMoreDetails2;
      'section.meet-the-team-success': SectionMeetTheTeamSuccess;
      'section.our-clients': SectionOurClients;
      'section.our-process': SectionOurProcess;
      'section.our-support-system': SectionOurSupportSystem;
      'section.pop-up-details': SectionPopUpDetails;
      'section.prerequisites-for-training': SectionPrerequisitesForTraining;
      'section.primary-highlights': SectionPrimaryHighlights;
      'section.project-management-team': SectionProjectManagementTeam;
      'section.quick-facts': SectionQuickFacts;
      'section.recommended-articles': SectionRecommendedArticles;
      'section.recommended-course': SectionRecommendedCourse;
      'section.related-courses': SectionRelatedCourses;
      'section.review-details': SectionReviewDetails;
      'section.skill-mastery': SectionSkillMastery;
      'section.slot-details': SectionSlotDetails;
      'section.social-network-ratings': SectionSocialNetworkRatings;
      'section.superior-outcome': SectionSuperiorOutcome;
      'section.talk-to-an-advisor': SectionTalkToAnAdvisor;
      'section.tech-skills-cta': SectionTechSkillsCta;
      'section.tools-covered': SectionToolsCovered;
      'section.training-options': SectionTrainingOptions;
      'section.trending-courses': SectionTrendingCourses;
      'section.trending-courses-in-other-cities': SectionTrendingCoursesInOtherCities;
      'section.usp-s-or-why-us': SectionUspSOrWhyUs;
      'section.what-sets-techademy': SectionWhatSetsTechademy;
      'section.what-you-will-learn': SectionWhatYouWillLearn;
      'section.who-should-attend-course': SectionWhoShouldAttendCourse;
      'section.why-profela': SectionWhyProfela;
      'section.why-teach-at-profela': SectionWhyTeachAtProfela;
      'section.why-techademy': SectionWhyTechademy;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'webinar-component.banner-section': WebinarComponentBannerSection;
      'webinar-component.before-after-success': WebinarComponentBeforeAfterSuccess;
      'webinar-component.blog-section': WebinarComponentBlogSection;
      'webinar-component.bonus-card': WebinarComponentBonusCard;
      'webinar-component.button-with-sub-title': WebinarComponentButtonWithSubTitle;
      'webinar-component.career-transition-details': WebinarComponentCareerTransitionDetails;
      'webinar-component.feature-with-icon': WebinarComponentFeatureWithIcon;
      'webinar-component.highlight-section': WebinarComponentHighlightSection;
      'webinar-component.highlights': WebinarComponentHighlights;
      'webinar-component.icon-title-color-code': WebinarComponentIconTitleColorCode;
      'webinar-component.info-details': WebinarComponentInfoDetails;
      'webinar-component.input-with-multi-select': WebinarComponentInputWithMultiSelect;
      'webinar-component.key-points': WebinarComponentKeyPoints;
      'webinar-component.list-of-workforce': WebinarComponentListOfWorkforce;
      'webinar-component.profile': WebinarComponentProfile;
      'webinar-component.sale-banner': WebinarComponentSaleBanner;
      'webinar-component.sidebar-section': WebinarComponentSidebarSection;
      'webinar-component.success-story-section': WebinarComponentSuccessStorySection;
      'webinar-component.thank-you-page': WebinarComponentThankYouPage;
      'webinar-component.tools-of-expertise': WebinarComponentToolsOfExpertise;
      'webinar-component.trusted-voices': WebinarComponentTrustedVoices;
      'webinar-component.user-details': WebinarComponentUserDetails;
      'webinar-component.video-content-block': WebinarComponentVideoContentBlock;
      'webinar-component.webinar-details': WebinarComponentWebinarDetails;
      'webinar-component.webinar-features': WebinarComponentWebinarFeatures;
      'webinar-section.about-us': WebinarSectionAboutUs;
      'webinar-section.about-webinar': WebinarSectionAboutWebinar;
      'webinar-section.career-benifits': WebinarSectionCareerBenifits;
      'webinar-section.career-transition': WebinarSectionCareerTransition;
      'webinar-section.exclusive-bonus-pack': WebinarSectionExclusiveBonusPack;
      'webinar-section.faq-details': WebinarSectionFaqDetails;
      'webinar-section.faq-details-on-webinar': WebinarSectionFaqDetailsOnWebinar;
      'webinar-section.horizontal-menu': WebinarSectionHorizontalMenu;
      'webinar-section.know-your-mentors': WebinarSectionKnowYourMentors;
      'webinar-section.live-training-promo': WebinarSectionLiveTrainingPromo;
      'webinar-section.meet-the-trainer': WebinarSectionMeetTheTrainer;
      'webinar-section.professional-testimonials': WebinarSectionProfessionalTestimonials;
      'webinar-section.recommended-webinars': WebinarSectionRecommendedWebinars;
      'webinar-section.sticky-footer': WebinarSectionStickyFooter;
      'webinar-section.unlock-the-ai-advantage': WebinarSectionUnlockTheAiAdvantage;
      'webinar-section.webinars': WebinarSectionWebinars;
      'webinar-section.what-will-you-learn': WebinarSectionWhatWillYouLearn;
      'webinar-section.what-you-will-gain': WebinarSectionWhatYouWillGain;
      'webinar-section.who-can-attend': WebinarSectionWhoCanAttend;
      'webinar-section.who-should-attend-workshop': WebinarSectionWhoShouldAttendWorkshop;
      'webinar-section.why-this-course': WebinarSectionWhyThisCourse;
      'webinar-section.why-this-program': WebinarSectionWhyThisProgram;
    }
  }
}
