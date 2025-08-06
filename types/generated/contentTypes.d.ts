import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAcademyFooterAcademyFooter extends Struct.SingleTypeSchema {
  collectionName: 'academy_footers';
  info: {
    displayName: 'Academy Footer';
    pluralName: 'academy-footers';
    singularName: 'academy-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Schema.Attribute.Component<'footer.company-links', false>;
    CopyRightInfo: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::academy-footer.academy-footer'
    > &
      Schema.Attribute.Private;
    mastersPrograms: Schema.Attribute.Component<'footer.courses', false>;
    mediaLinks: Schema.Attribute.Component<'footer.media-links', false>;
    partnerWithUs: Schema.Attribute.Component<'footer.partner-with-us', false>;
    policies: Schema.Attribute.Component<'footer.policies', false>;
    publishedAt: Schema.Attribute.DateTime;
    resources: Schema.Attribute.Component<'footer.resources', false>;
    support: Schema.Attribute.Component<'footer.support', false>;
    supportContact: Schema.Attribute.Component<'footer.support-contact', true>;
    topCategories: Schema.Attribute.Component<'footer.categories', false>;
    topCourses: Schema.Attribute.Component<'footer.courses', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAcademyHeaderAcademyHeader extends Struct.SingleTypeSchema {
  collectionName: 'academy_headers';
  info: {
    displayName: 'Academy Header';
    pluralName: 'academy-headers';
    singularName: 'academy-header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::academy-header.academy-header'
    > &
      Schema.Attribute.Private;
    menus: Schema.Attribute.Component<'component.header-item', true>;
    publishedAt: Schema.Attribute.DateTime;
    saleBanner: Schema.Attribute.Component<'component.sale-banner', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAllEventAllEvent extends Struct.SingleTypeSchema {
  collectionName: 'all_events';
  info: {
    description: '';
    displayName: 'All Event';
    pluralName: 'all-events';
    singularName: 'all-event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'event-section.what-s-new',
        'event-section.daily-news-letter',
        'event-section.partner-with-us',
        'event-section.event-insights',
        'event-section.join-the-comunity',
        'event-section.promate-and-connect',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    event_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::event-category.event-category'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::all-event.all-event'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAssessmentDetailAssessmentDetail
  extends Struct.CollectionTypeSchema {
  collectionName: 'assessment_details';
  info: {
    description: '';
    displayName: 'Assessment Detail';
    pluralName: 'assessment-details';
    singularName: 'assessment-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-18-banner',
        'section.our-clients',
        'assessment-section.our-features',
        'assessment-section.onboarding-steps',
        'assessment-section.tailored-plans',
        'assessment-components.service-request-cta',
        'section.review-details',
        'section.social-network-ratings',
        'assessment-section.how-to-use-the-platform',
        'component.cta-content-block',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::assessment-detail.assessment-detail'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAssessmentHomepageAssessmentHomepage
  extends Struct.SingleTypeSchema {
  collectionName: 'assessment_homepages';
  info: {
    description: '';
    displayName: 'Assessment Homepage';
    pluralName: 'assessment-homepages';
    singularName: 'assessment-homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-17-banner',
        'section.our-clients',
        'assessment-section.proven-performance',
        'assessment-section.tailored-assessment-solutions',
        'assessment-section.tailored-plans',
        'assessment-components.service-request-cta',
        'section.review-details',
        'section.social-network-ratings',
        'component.cta-content-block',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::assessment-homepage.assessment-homepage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    description: '';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    certifications: Schema.Attribute.Component<'component.features', true>;
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    designation: Schema.Attribute.String;
    email: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    experience: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    qualification: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    socialMediaLinks: Schema.Attribute.Component<
      'blog-component.social-media-links',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String & Schema.Attribute.Unique;
    yearOfExp: Schema.Attribute.Decimal;
  };
}

export interface ApiB2BAcademyCategoryB2BAcademyCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_academy_categories';
  info: {
    description: '';
    displayName: 'B2B Academy Category';
    pluralName: 'b2-b-academy-categories';
    singularName: 'b2-b-academy-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-academy-category.b2-b-academy-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    order: Schema.Attribute.BigInteger;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BAuthorB2BAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_authors';
  info: {
    displayName: 'B2B Author';
    pluralName: 'b2-b-authors';
    singularName: 'b2-b-author';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    about: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    certifications: Schema.Attribute.Component<'component.features', true>;
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    designation: Schema.Attribute.String;
    email: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    experience: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-author.b2-b-author'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    qualification: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    socialMediaLinks: Schema.Attribute.Component<
      'blog-component.social-media-links',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String & Schema.Attribute.Unique;
    yearOfExp: Schema.Attribute.Decimal;
  };
}

export interface ApiB2BBlogCategoryB2BBlogCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_blog_categories';
  info: {
    displayName: 'B2B Blog Category';
    pluralName: 'b2-b-blog-categories';
    singularName: 'b2-b-blog-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-blog-category.b2-b-blog-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BBlogB2BBlog extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_blogs';
  info: {
    description: '';
    displayName: 'B2B Blog';
    pluralName: 'b2-b-blogs';
    singularName: 'b2-b-blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    b_2_b_author: Schema.Attribute.Relation<
      'oneToOne',
      'api::b2-b-author.b2-b-author'
    >;
    b_2_b_blog_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::b2-b-blog-category.b2-b-blog-category'
    >;
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contents: Schema.Attribute.DynamicZone<
      [
        'blog-section.table-of-contents',
        'blog-section.blog-definition',
        'blog-section.video-content-block',
        'blog-section.content-banner',
        'blog-section.highlight-block',
        'blog-section.signup-newsletter',
        'blog-component.code-text-editor',
        'blog-component.image',
        'blog-section.background-highlight-block',
        'blog-section.comparison-table',
        'blog-section.free-guide-button',
        'blog-section.title-with-description',
        'section.faq-details',
        'blog-component.social-media-links',
        'blog-section.recommended-blogs',
        'blog-section.recommended-courses',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    durationInMinutes: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-blog.b2-b-blog'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    recommentedArticle: Schema.Attribute.Component<
      'blog-section.related-articles',
      false
    >;
    recommentedCourse: Schema.Attribute.Component<
      'blog-section.recommended-course',
      false
    >;
    relatedArticles: Schema.Attribute.Component<
      'blog-section.related-articles',
      false
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    viewCount: Schema.Attribute.Integer;
  };
}

export interface ApiB2BEBookDetailB2BEBookDetail
  extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_e_book_details';
  info: {
    description: '';
    displayName: 'B2B EBook Detail';
    pluralName: 'b2-b-e-book-details';
    singularName: 'b2-b-e-book-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    b_2_b_author: Schema.Attribute.Relation<
      'oneToOne',
      'api::b2-b-author.b2-b-author'
    >;
    b_2_b_resource_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::b2-b-resource-type.b2-b-resource-type'
    >;
    contents: Schema.Attribute.DynamicZone<
      [
        'section.e-book-beginner-guide',
        'section.about-e-book',
        'section.recommended-articles',
        'section.recommended-course',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    durationInMin: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-e-book-detail.b2-b-e-book-detail'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    published: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BEBookListingB2BEBookListing
  extends Struct.SingleTypeSchema {
  collectionName: 'b2_b_e_book_listings';
  info: {
    description: '';
    displayName: 'B2B EBook Listing';
    pluralName: 'b2-b-e-book-listings';
    singularName: 'b2-b-e-book-listing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-16-banner',
        'section.horizontal-navbar',
        'section.e-books',
        'component.cta-content-block',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-e-book-listing.b2-b-e-book-listing'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BFooterB2BFooter extends Struct.SingleTypeSchema {
  collectionName: 'b2_b_footers';
  info: {
    displayName: 'B2B Footer';
    pluralName: 'b2-b-footers';
    singularName: 'b2-b-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Schema.Attribute.Component<'footer.company-links', false>;
    CopyRightInfo: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-footer.b2-b-footer'
    > &
      Schema.Attribute.Private;
    mastersPrograms: Schema.Attribute.Component<'footer.courses', false>;
    mediaLinks: Schema.Attribute.Component<'footer.media-links', false>;
    partnerWithUs: Schema.Attribute.Component<'footer.partner-with-us', false>;
    policies: Schema.Attribute.Component<'footer.policies', false>;
    publishedAt: Schema.Attribute.DateTime;
    resources: Schema.Attribute.Component<'footer.resources', false>;
    support: Schema.Attribute.Component<'footer.support', false>;
    supportContact: Schema.Attribute.Component<'footer.support-contact', true>;
    topCategories: Schema.Attribute.Component<'footer.categories', false>;
    topCourses: Schema.Attribute.Component<'footer.courses', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BHompageB2BHompage extends Struct.SingleTypeSchema {
  collectionName: 'b2_b_hompages';
  info: {
    description: '';
    displayName: 'B2B Hompage';
    pluralName: 'b2-b-hompages';
    singularName: 'b2-b-hompage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-13-banner',
        'section.our-clients',
        'section.end-to-end-solutions',
        'section.academies',
        'section.tech-skills-cta',
        'section.why-techademy',
        'section.business-impact',
        'section.learning-hub',
        'component.cta-content-block',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-hompage.b2-b-hompage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BResourceTypeB2BResourceType
  extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_resource_types';
  info: {
    displayName: 'B2B Resource Type';
    pluralName: 'b2-b-resource-types';
    singularName: 'b2-b-resource-type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-resource-type.b2-b-resource-type'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    redirectUrl: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'href']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BWebinarDetailB2BWebinarDetail
  extends Struct.CollectionTypeSchema {
  collectionName: 'b2_b_webinar_details';
  info: {
    description: '';
    displayName: 'B2B  Webinar Detail';
    pluralName: 'b2-b-webinar-details';
    singularName: 'b2-b-webinar-detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    b_2_b_resource_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::b2-b-resource-type.b2-b-resource-type'
    >;
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-15-banner',
        'webinar-section.about-webinar',
        'webinar-section.what-you-will-gain',
        'webinar-section.meet-the-trainer',
        'webinar-section.who-can-attend',
        'section.review-details',
        'webinar-section.career-transition',
        'webinar-section.about-us',
        'webinar-section.recommended-webinars',
        'webinar-section.faq-details-on-webinar',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-webinar-detail.b2-b-webinar-detail'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2BWebinarListingB2BWebinarListing
  extends Struct.SingleTypeSchema {
  collectionName: 'b2_b_webinar_listings';
  info: {
    description: '';
    displayName: 'B2B Webinar Listing';
    pluralName: 'b2-b-webinar-listings';
    singularName: 'b2-b-webinar-listing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-14-banner',
        'webinar-section.webinars',
        'webinar-section.horizontal-menu',
        'component.cta-content-block',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-b-webinar-listing.b2-b-webinar-listing'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2CAcademyB2CAcademy extends Struct.CollectionTypeSchema {
  collectionName: 'b2_c_academies';
  info: {
    description: '';
    displayName: 'B2B Academy';
    pluralName: 'b2-c-academies';
    singularName: 'b2-c-academy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    b_2_b_academy_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::b2-b-academy-category.b2-b-academy-category'
    >;
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    content: Schema.Attribute.DynamicZone<
      [
        'section.ct-8-banner',
        'section.quick-facts',
        'section.highlights',
        'section.tools-covered',
        'section.why-profela',
        'component.got-a-question',
        'section.what-you-will-learn',
        'section.faq-details',
        'section.our-clients',
        'section.review-details',
        'section.course-summary',
        'section.demand-increased',
        'section.left-side-bar-menu-2',
        'section.growth-numbers',
        'section.meet-the-team-more-details-2',
        'section.social-network-ratings',
      ]
    >;
    country: Schema.Attribute.Relation<'oneToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deliveryType: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Classroom', 'Self Paced', 'Live Online Classroom']
      >;
    durationInHrs: Schema.Attribute.Integer;
    enableLandingPage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enablePlanDetail: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enableStickyFooter: Schema.Attribute.Boolean;
    enrolledLearners: Schema.Attribute.Integer;
    global_accreditation: Schema.Attribute.Relation<
      'oneToOne',
      'api::global-accreditation.global-accreditation'
    >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isBestSeller: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isJobAssistant: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isNew: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRecommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isTrending: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-c-academy.b2-c-academy'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    masterCourse: Schema.Attribute.String &
      Schema.Attribute.CustomField<
        'plugin::custom-dropdown.custom-dropdown',
        {
          collectionType: 'course_template_1s';
        }
      >;
    order: Schema.Attribute.Integer;
    pageType: Schema.Attribute.Enumeration<
      ['Academy', 'Training', 'Certification', 'Bootcamp']
    >;
    planDetails: Schema.Attribute.Component<
      'component.upgrade-plan-pop-up',
      false
    >;
    prices: Schema.Attribute.Component<'component.course-price', true>;
    pricingInfo: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'blog-component.button-details',
      false
    >;
    roles: Schema.Attribute.Enumeration<['user-1', 'user-2']>;
    scheduleListVerion: Schema.Attribute.Enumeration<['V1', 'V2', 'V3']> &
      Schema.Attribute.DefaultTo<'V1'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    tag: Schema.Attribute.String;
    timezone: Schema.Attribute.Relation<'oneToOne', 'api::timezone.timezone'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2CFooterB2CFooter extends Struct.SingleTypeSchema {
  collectionName: 'b2_c_footers';
  info: {
    displayName: 'B2C Footer';
    pluralName: 'b2-c-footers';
    singularName: 'b2-c-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Schema.Attribute.Component<'footer.company-links', false>;
    CopyRightInfo: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-c-footer.b2-c-footer'
    > &
      Schema.Attribute.Private;
    mastersPrograms: Schema.Attribute.Component<'footer.courses', false>;
    mediaLinks: Schema.Attribute.Component<'footer.media-links', false>;
    partnerWithUs: Schema.Attribute.Component<'footer.partner-with-us', false>;
    policies: Schema.Attribute.Component<'footer.policies', false>;
    publishedAt: Schema.Attribute.DateTime;
    resources: Schema.Attribute.Component<'footer.resources', false>;
    support: Schema.Attribute.Component<'footer.support', false>;
    supportContact: Schema.Attribute.Component<'footer.support-contact', true>;
    topCategories: Schema.Attribute.Component<'footer.categories', false>;
    topCourses: Schema.Attribute.Component<'footer.courses', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiB2CHomepageB2CHomepage extends Struct.SingleTypeSchema {
  collectionName: 'b2_c_homepages';
  info: {
    displayName: 'B2C Homepage';
    pluralName: 'b2-c-homepages';
    singularName: 'b2-c-homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-7-banner',
        'component.trusted-by-companies',
        'section.learning-experience',
        'section.learner-testimonials',
        'section.industry-leaders',
        'section.enterprises-are-saying',
        'section.why-techademy',
        'section.our-support-system',
        'component.got-a-question',
        'section.ct-10-banner',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::b2-c-homepage.b2-c-homepage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBecomeAnInstructorBecomeAnInstructor
  extends Struct.SingleTypeSchema {
  collectionName: 'become_an_instructors';
  info: {
    description: '';
    displayName: 'Become An Instructor';
    pluralName: 'become-an-instructors';
    singularName: 'become-an-instructor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-5-banner',
        'section.why-profela',
        'section.why-teach-at-profela',
        'section.quick-facts',
        'component.got-a-question',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::become-an-instructor.become-an-instructor'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'blog_categories';
  info: {
    displayName: 'Blog Category ';
    pluralName: 'blog-categories';
    singularName: 'blog-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-category.blog-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogListingPageBlogListingPage
  extends Struct.SingleTypeSchema {
  collectionName: 'blog_listing_pages';
  info: {
    description: '';
    displayName: 'Blog Listing Page';
    pluralName: 'blog-listing-pages';
    singularName: 'blog-listing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<'blog-section.content-banner', false>;
    contents: Schema.Attribute.DynamicZone<['blog-section.signup-newsletter']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    learningResourses: Schema.Attribute.Component<
      'blog-section.learning-resourse',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-listing-page.blog-listing-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    blog_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::blog-category.blog-category'
    >;
    contents: Schema.Attribute.DynamicZone<
      [
        'blog-section.table-of-contents',
        'blog-section.blog-definition',
        'blog-section.video-content-block',
        'blog-section.content-banner',
        'blog-section.highlight-block',
        'blog-section.signup-newsletter',
        'blog-component.code-text-editor',
        'blog-component.image',
        'blog-section.background-highlight-block',
        'blog-section.comparison-table',
        'blog-section.free-guide-button',
        'blog-section.title-with-description',
        'section.faq-details',
        'blog-component.social-media-links',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    durationInMinutes: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    recommentedArticle: Schema.Attribute.Component<
      'blog-section.related-articles',
      false
    >;
    recommentedCourse: Schema.Attribute.Component<
      'blog-section.recommended-course',
      false
    >;
    redirectUrl: Schema.Attribute.Component<
      'component.button-with-icon',
      false
    >;
    relatedArticles: Schema.Attribute.Component<
      'blog-section.related-articles',
      false
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    viewCount: Schema.Attribute.Integer;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: '';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    displayName: 'Country';
    pluralName: 'countries';
    singularName: 'country';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCourseTemplate1CourseTemplate1
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_template_1s';
  info: {
    description: '';
    displayName: 'Course Template 1';
    pluralName: 'course-template-1s';
    singularName: 'course-template-1';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    content: Schema.Attribute.DynamicZone<
      [
        'section.about-certification',
        'section.certification-details',
        'section.ct-1-banner',
        'section.ct-3-banner',
        'section.course-certification',
        'section.course-fee',
        'section.curriculum',
        'section.certified-professionals',
        'section.career-success-stories',
        'section.demand-increased',
        'section.exclusive-bonuses',
        'component.exit-popup',
        'section.faq-details',
        'section.faq-details-on-course',
        'component.got-a-question',
        'component.flexi-pass-card',
        'section.highlights',
        'section.primary-highlights',
        'component.highlight-summary',
        'section.horizontal-menu',
        'section.left-side-bar-menus',
        'section.learning-path',
        'section.meet-the-team',
        'section.meet-the-team-more-details',
        'section.meet-the-team-success',
        'section.prerequisites-for-training',
        'section.project-management-team',
        'section.quick-facts',
        'section.review-details',
        'section.related-courses',
        'section.social-network-ratings',
        'section.talk-to-an-advisor',
        'section.training-options',
        'section.trending-courses-in-other-cities',
        'component.title-with-description',
        'section.trending-courses',
        'section.why-profela',
        'section.who-should-attend-course',
        'landing-page-section.course-features',
        'section.ct-4-banner',
        'section.ct-6-banner',
      ]
    >;
    country: Schema.Attribute.Relation<'oneToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deliveryType: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Classroom', 'Self Paced', 'Live Online Classroom']
      >;
    durationInHrs: Schema.Attribute.Integer;
    enableLandingPage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enablePlanDetail: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    enableRolesInLeadForm: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    enableStickyFooter: Schema.Attribute.Boolean;
    enrolledLearners: Schema.Attribute.Integer;
    global_accreditation: Schema.Attribute.Relation<
      'oneToOne',
      'api::global-accreditation.global-accreditation'
    >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isBestSeller: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isJobAssistant: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isNew: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRecommended: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isTrending: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-template-1.course-template-1'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    masterCourse: Schema.Attribute.String &
      Schema.Attribute.CustomField<
        'plugin::custom-dropdown.custom-dropdown',
        {
          collectionType: 'course_template_1s';
        }
      >;
    order: Schema.Attribute.Integer;
    planDetails: Schema.Attribute.Component<
      'component.upgrade-plan-pop-up',
      false
    >;
    prices: Schema.Attribute.Component<'component.course-price', true>;
    pricingInfo: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    registerForWebinar: Schema.Attribute.Text;
    registerForWebinarButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    scheduleListVerion: Schema.Attribute.Enumeration<['V1', 'V2', 'V3']> &
      Schema.Attribute.DefaultTo<'V1'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    tag: Schema.Attribute.String;
    timezone: Schema.Attribute.Relation<'oneToOne', 'api::timezone.timezone'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    zohoCrmCourseId: Schema.Attribute.String;
  };
}

export interface ApiCurrencyCurrency extends Struct.CollectionTypeSchema {
  collectionName: 'currencies';
  info: {
    description: '';
    displayName: 'Currency';
    pluralName: 'currencies';
    singularName: 'currency';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String;
    countryCodes: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::currency.currency'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    symbol: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventCategoryEventCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'event_categories';
  info: {
    displayName: 'Event Category';
    pluralName: 'event-categories';
    singularName: 'event-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-category.event-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    order: Schema.Attribute.BigInteger;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventFooterEventFooter extends Struct.SingleTypeSchema {
  collectionName: 'event_footers';
  info: {
    description: '';
    displayName: 'Event Footer';
    pluralName: 'event-footers';
    singularName: 'event-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CopyRightInfo: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    discoverEvents: Schema.Attribute.Component<'footer.company-links', false>;
    explore: Schema.Attribute.Component<'footer.company-links', false>;
    hostEvents: Schema.Attribute.Component<'footer.company-links', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-footer.event-footer'
    > &
      Schema.Attribute.Private;
    partnerWithUs: Schema.Attribute.Component<'footer.company-links', false>;
    publishedAt: Schema.Attribute.DateTime;
    upcomingEvents: Schema.Attribute.Component<'footer.company-links', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventHeaderEventHeader extends Struct.SingleTypeSchema {
  collectionName: 'event_headers';
  info: {
    displayName: 'Event Header';
    pluralName: 'event-headers';
    singularName: 'event-header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-header.event-header'
    > &
      Schema.Attribute.Private;
    menus: Schema.Attribute.Component<'component.header-item', true>;
    publishedAt: Schema.Attribute.DateTime;
    saleBanner: Schema.Attribute.Component<'component.sale-banner', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEventEvent extends Struct.CollectionTypeSchema {
  collectionName: 'events';
  info: {
    description: '';
    displayName: 'Event';
    pluralName: 'events';
    singularName: 'event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.UID<'heading'>;
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-9-banner',
        'event-section.event-summary',
        'event-section.conference-tracks',
        'event-section.why-attend',
        'event-section.our-sponsers',
        'event-section.what-participants-say-about-us',
        'event-section.faq-details',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eventDate: Schema.Attribute.DateTime;
    eventType: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::event.event'> &
      Schema.Attribute.Private;
    location: Schema.Attribute.Relation<'oneToOne', 'api::location.location'>;
    planDetails: Schema.Attribute.Component<
      'component.upgrade-plan-pop-up',
      false
    >;
    prices: Schema.Attribute.Component<'component.course-price', true>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    description: '';
    displayName: 'Footer';
    pluralName: 'footers';
    singularName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Schema.Attribute.Component<'footer.company-links', false>;
    CopyRightInfo: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer.footer'
    > &
      Schema.Attribute.Private;
    mastersPrograms: Schema.Attribute.Component<'footer.courses', false>;
    mediaLinks: Schema.Attribute.Component<'footer.media-links', false>;
    partnerWithUs: Schema.Attribute.Component<'footer.partner-with-us', false>;
    policies: Schema.Attribute.Component<'footer.policies', false>;
    publishedAt: Schema.Attribute.DateTime;
    resources: Schema.Attribute.Component<'footer.resources', false>;
    support: Schema.Attribute.Component<'footer.support', false>;
    supportContact: Schema.Attribute.Component<'footer.support-contact', true>;
    topCategories: Schema.Attribute.Component<'footer.categories', false>;
    topCourses: Schema.Attribute.Component<'footer.courses', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGlobalAccreditationGlobalAccreditation
  extends Struct.CollectionTypeSchema {
  collectionName: 'global_accreditations';
  info: {
    description: '';
    displayName: 'Global Accreditation';
    pluralName: 'global-accreditations';
    singularName: 'global-accreditation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-accreditation.global-accreditation'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Struct.SingleTypeSchema {
  collectionName: 'headers';
  info: {
    description: '';
    displayName: 'Header';
    pluralName: 'headers';
    singularName: 'header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::header.header'
    > &
      Schema.Attribute.Private;
    menus: Schema.Attribute.Component<'component.header-item', true>;
    publishedAt: Schema.Attribute.DateTime;
    saleBanner: Schema.Attribute.Component<'component.sale-banner', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepages';
  info: {
    description: '';
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-2-banner',
        'section.get-certified-get-noticed',
        'section.courses-we-have',
        'section.usp-s-or-why-us',
        'section.superior-outcome',
        'section.review-details',
        'section.social-network-ratings',
        'section.industry-leaders',
        'section.enterprises-are-saying',
        'section.our-support-system',
        'section.learners-overthen-globe',
        'component.got-a-question',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Struct.CollectionTypeSchema {
  collectionName: 'landing_pages';
  info: {
    description: '';
    displayName: 'Landing Page';
    pluralName: 'landing-pages';
    singularName: 'landing-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'landing-page-section.landing-page-banner',
        'landing-page-section.quick-facts',
        'landing-page-section.lp-horizontal-menu',
        'landing-page-section.talk-to-an-advisor',
        'landing-page-section.course-features',
        'landing-page-section.lp-highlights',
        'landing-page-section.lp-meet-the-team-details',
        'section.exclusive-bonuses',
        'section.ct-4-banner',
      ]
    >;
    course_template_1: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-template-1.course-template-1'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::landing-page.landing-page'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    removeCourseComponents: Schema.Attribute.Component<
      'landing-page-component.remove-course-components',
      false
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLocationLocation extends Struct.CollectionTypeSchema {
  collectionName: 'locations';
  info: {
    displayName: 'Location';
    pluralName: 'locations';
    singularName: 'location';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::location.location'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLpHeaderLpHeader extends Struct.SingleTypeSchema {
  collectionName: 'lp_headers';
  info: {
    description: '';
    displayName: 'LP Header';
    pluralName: 'lp-headers';
    singularName: 'lp-header';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    couponButton: Schema.Attribute.Component<
      'landing-page-component.coupon-button',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lp-header.lp-header'
    > &
      Schema.Attribute.Private;
    menus: Schema.Attribute.Component<'component.header-item', true>;
    publishedAt: Schema.Attribute.DateTime;
    saleBanner: Schema.Attribute.Component<'component.sale-banner', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMegaMenuMegaMenu extends Struct.SingleTypeSchema {
  collectionName: 'mega_menus';
  info: {
    displayName: 'Mega Menu';
    pluralName: 'mega-menus';
    singularName: 'mega-menu';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categories: Schema.Attribute.Component<
      'component.mega-menu-course-category',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mega-menu.mega-menu'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPopUpPopUp extends Struct.CollectionTypeSchema {
  collectionName: 'pop_ups';
  info: {
    description: '';
    displayName: 'Pop up';
    pluralName: 'pop-ups';
    singularName: 'pop-up';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button-details', false>;
    code: Schema.Attribute.UID & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pop-up.pop-up'
    > &
      Schema.Attribute.Private;
    preHeading: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    specification: Schema.Attribute.Component<'section.pop-up-details', false>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSolutionPageSolutionPage
  extends Struct.CollectionTypeSchema {
  collectionName: 'solution_pages';
  info: {
    displayName: 'Solution Page';
    pluralName: 'solution-pages';
    singularName: 'solution-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.business-impact',
        'section.what-sets-techademy',
        'section.skill-mastery',
        'section.our-process',
        'section.case-studies',
        'section.our-clients',
        'section.learning-hub',
        'section.challenge-your-workforce',
        'section.ct-17-banner',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution-page.solution-page'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTimezoneTimezone extends Struct.CollectionTypeSchema {
  collectionName: 'timezones';
  info: {
    displayName: 'Timezone';
    pluralName: 'timezones';
    singularName: 'timezone';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::timezone.timezone'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWebinarCategoryWebinarCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'webinar_categories';
  info: {
    displayName: 'Webinar Category';
    pluralName: 'webinar-categories';
    singularName: 'webinar-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webinar-category.webinar-category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    order: Schema.Attribute.BigInteger;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWebinarFooterWebinarFooter extends Struct.SingleTypeSchema {
  collectionName: 'webinar_footers';
  info: {
    displayName: 'Webinar Footer';
    pluralName: 'webinar-footers';
    singularName: 'webinar-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CopyRightInfo: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webinar-footer.webinar-footer'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWebinarListingWebinarListing
  extends Struct.SingleTypeSchema {
  collectionName: 'webinar_listings';
  info: {
    description: '';
    displayName: 'Webinar Listing';
    pluralName: 'webinar-listings';
    singularName: 'webinar-listing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<['section.ct-11-banner']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webinar-listing.webinar-listing'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWebinarV2WebinarV2 extends Struct.CollectionTypeSchema {
  collectionName: 'webinar_v2s';
  info: {
    description: '';
    displayName: 'Webinar V2';
    pluralName: 'webinar-v2s';
    singularName: 'webinar-v2';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contents: Schema.Attribute.DynamicZone<
      [
        'section.ct-12-banner',
        'webinar-section.why-this-course',
        'webinar-section.what-will-you-learn',
        'webinar-section.why-this-program',
        'webinar-section.career-benifits',
        'webinar-section.live-training-promo',
        'webinar-section.know-your-mentors',
        'webinar-section.professional-testimonials',
        'webinar-section.exclusive-bonus-pack',
        'webinar-section.faq-details',
        'webinar-section.unlock-the-ai-advantage',
        'webinar-section.who-should-attend-workshop',
        'webinar-section.sticky-footer',
      ]
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webinar-v2.webinar-v2'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    noOfRegisteredUsers: Schema.Attribute.BigInteger;
    publishedAt: Schema.Attribute.DateTime;
    registerNowButton: Schema.Attribute.Component<
      'component.button-details',
      false
    >;
    saleBanner: Schema.Attribute.Component<
      'webinar-component.sale-banner',
      false
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    thankYouPageDetails: Schema.Attribute.Component<
      'webinar-component.thank-you-page',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    webinar_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::webinar-category.webinar-category'
    >;
    webinarEndsAt: Schema.Attribute.DateTime;
    webinarStartsAt: Schema.Attribute.DateTime;
    webinarWebHookURL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiWebinarWebinar extends Struct.CollectionTypeSchema {
  collectionName: 'webinars';
  info: {
    description: '';
    displayName: 'Webinar Old';
    pluralName: 'webinars';
    singularName: 'webinar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Component<
      'webinar-component.banner-section',
      false
    >;
    blog: Schema.Attribute.Component<'webinar-component.blog-section', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    highlights: Schema.Attribute.Component<
      'webinar-component.highlight-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webinar.webinar'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    redirectUrl: Schema.Attribute.Component<
      'component.button-with-icon',
      false
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    sidebar: Schema.Attribute.Component<
      'webinar-component.sidebar-section',
      false
    >;
    slots: Schema.Attribute.Component<'section.slot-details', false>;
    slug: Schema.Attribute.UID<'name'>;
    success_story: Schema.Attribute.Component<
      'webinar-component.success-story-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workforce: Schema.Attribute.Component<
      'webinar-component.list-of-workforce',
      false
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::academy-footer.academy-footer': ApiAcademyFooterAcademyFooter;
      'api::academy-header.academy-header': ApiAcademyHeaderAcademyHeader;
      'api::all-event.all-event': ApiAllEventAllEvent;
      'api::assessment-detail.assessment-detail': ApiAssessmentDetailAssessmentDetail;
      'api::assessment-homepage.assessment-homepage': ApiAssessmentHomepageAssessmentHomepage;
      'api::author.author': ApiAuthorAuthor;
      'api::b2-b-academy-category.b2-b-academy-category': ApiB2BAcademyCategoryB2BAcademyCategory;
      'api::b2-b-author.b2-b-author': ApiB2BAuthorB2BAuthor;
      'api::b2-b-blog-category.b2-b-blog-category': ApiB2BBlogCategoryB2BBlogCategory;
      'api::b2-b-blog.b2-b-blog': ApiB2BBlogB2BBlog;
      'api::b2-b-e-book-detail.b2-b-e-book-detail': ApiB2BEBookDetailB2BEBookDetail;
      'api::b2-b-e-book-listing.b2-b-e-book-listing': ApiB2BEBookListingB2BEBookListing;
      'api::b2-b-footer.b2-b-footer': ApiB2BFooterB2BFooter;
      'api::b2-b-hompage.b2-b-hompage': ApiB2BHompageB2BHompage;
      'api::b2-b-resource-type.b2-b-resource-type': ApiB2BResourceTypeB2BResourceType;
      'api::b2-b-webinar-detail.b2-b-webinar-detail': ApiB2BWebinarDetailB2BWebinarDetail;
      'api::b2-b-webinar-listing.b2-b-webinar-listing': ApiB2BWebinarListingB2BWebinarListing;
      'api::b2-c-academy.b2-c-academy': ApiB2CAcademyB2CAcademy;
      'api::b2-c-footer.b2-c-footer': ApiB2CFooterB2CFooter;
      'api::b2-c-homepage.b2-c-homepage': ApiB2CHomepageB2CHomepage;
      'api::become-an-instructor.become-an-instructor': ApiBecomeAnInstructorBecomeAnInstructor;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::blog-listing-page.blog-listing-page': ApiBlogListingPageBlogListingPage;
      'api::blog.blog': ApiBlogBlog;
      'api::category.category': ApiCategoryCategory;
      'api::country.country': ApiCountryCountry;
      'api::course-template-1.course-template-1': ApiCourseTemplate1CourseTemplate1;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::event-category.event-category': ApiEventCategoryEventCategory;
      'api::event-footer.event-footer': ApiEventFooterEventFooter;
      'api::event-header.event-header': ApiEventHeaderEventHeader;
      'api::event.event': ApiEventEvent;
      'api::footer.footer': ApiFooterFooter;
      'api::global-accreditation.global-accreditation': ApiGlobalAccreditationGlobalAccreditation;
      'api::header.header': ApiHeaderHeader;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::location.location': ApiLocationLocation;
      'api::lp-header.lp-header': ApiLpHeaderLpHeader;
      'api::mega-menu.mega-menu': ApiMegaMenuMegaMenu;
      'api::pop-up.pop-up': ApiPopUpPopUp;
      'api::solution-page.solution-page': ApiSolutionPageSolutionPage;
      'api::timezone.timezone': ApiTimezoneTimezone;
      'api::webinar-category.webinar-category': ApiWebinarCategoryWebinarCategory;
      'api::webinar-footer.webinar-footer': ApiWebinarFooterWebinarFooter;
      'api::webinar-listing.webinar-listing': ApiWebinarListingWebinarListing;
      'api::webinar-v2.webinar-v2': ApiWebinarV2WebinarV2;
      'api::webinar.webinar': ApiWebinarWebinar;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
