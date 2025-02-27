import type { Schema, Struct } from '@strapi/strapi';

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
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    redirectUrl: Schema.Attribute.String;
    title: Schema.Attribute.Text;
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
          preset: 'standard';
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
          preset: 'standard';
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
    subHeading: Schema.Attribute.String & Schema.Attribute.Required;
    trainingDetails: Schema.Attribute.Component<
      'component.button-details',
      false
    > &
      Schema.Attribute.Required;
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
          preset: 'standard';
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
          preset: 'standard';
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-component.button-details': BlogComponentButtonDetails;
      'blog-component.code-text-editor': BlogComponentCodeTextEditor;
      'blog-component.feature': BlogComponentFeature;
      'blog-component.feature-with-icon': BlogComponentFeatureWithIcon;
      'blog-component.image': BlogComponentImage;
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
      'blog-section.recommended-course': BlogSectionRecommendedCourse;
      'blog-section.related-articles': BlogSectionRelatedArticles;
      'blog-section.signup-newsletter': BlogSectionSignupNewsletter;
      'blog-section.table-of-contents': BlogSectionTableOfContents;
      'blog-section.title-description-with-ad': BlogSectionTitleDescriptionWithAd;
      'blog-section.title-with-description': BlogSectionTitleWithDescription;
      'blog-section.video-content-block': BlogSectionVideoContentBlock;
      'component.about-certification-questions': ComponentAboutCertificationQuestions;
      'component.advantages': ComponentAdvantages;
      'component.banner-team': ComponentBannerTeam;
      'component.bonus-details': ComponentBonusDetails;
      'component.button-details': ComponentButtonDetails;
      'component.career-success-stories-list': ComponentCareerSuccessStoriesList;
      'component.career-success-story-company': ComponentCareerSuccessStoryCompany;
      'component.certified-professional-role': ComponentCertifiedProfessionalRole;
      'component.certified-professional-role-list': ComponentCertifiedProfessionalRoleList;
      'component.contact': ComponentContact;
      'component.course-fee-currency-wise': ComponentCourseFeeCurrencyWise;
      'component.course-fee-plans': ComponentCourseFeePlans;
      'component.course-price': ComponentCoursePrice;
      'component.curriculum-topics': ComponentCurriculumTopics;
      'component.discount-tag-details': ComponentDiscountTagDetails;
      'component.enterprise-details': ComponentEnterpriseDetails;
      'component.exit-popup': ComponentExitPopup;
      'component.facts': ComponentFacts;
      'component.faq-detail-role': ComponentFaqDetailRole;
      'component.faqs': ComponentFaqs;
      'component.features': ComponentFeatures;
      'component.flexi-pass-card': ComponentFlexiPassCard;
      'component.got-a-question': ComponentGotAQuestion;
      'component.group-discount': ComponentGroupDiscount;
      'component.header-item': ComponentHeaderItem;
      'component.header-sub-item': ComponentHeaderSubItem;
      'component.highlight-list': ComponentHighlightList;
      'component.highlight-summary': ComponentHighlightSummary;
      'component.highlights-2': ComponentHighlights2;
      'component.image-header-description': ComponentImageHeaderDescription;
      'component.image-tag-lines': ComponentImageTagLines;
      'component.image-with-title': ComponentImageWithTitle;
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
      'component.review-user': ComponentReviewUser;
      'component.reviews': ComponentReviews;
      'component.role-wise-increased': ComponentRoleWiseIncreased;
      'component.sale-banner': ComponentSaleBanner;
      'component.social-links': ComponentSocialLinks;
      'component.social-network-ratings': ComponentSocialNetworkRatings;
      'component.support-team-details': ComponentSupportTeamDetails;
      'component.team-profile': ComponentTeamProfile;
      'component.title-with-description': ComponentTitleWithDescription;
      'component.trusted-by-companies': ComponentTrustedByCompanies;
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
      'section.career-success-stories': SectionCareerSuccessStories;
      'section.certification-details': SectionCertificationDetails;
      'section.certified-professionals': SectionCertifiedProfessionals;
      'section.continental-based-enrolled-learners': SectionContinentalBasedEnrolledLearners;
      'section.course-certification': SectionCourseCertification;
      'section.course-fee': SectionCourseFee;
      'section.courses-we-have': SectionCoursesWeHave;
      'section.ct-1-banner': SectionCt1Banner;
      'section.ct-2-banner': SectionCt2Banner;
      'section.ct-3-banner': SectionCt3Banner;
      'section.ct-4-banner': SectionCt4Banner;
      'section.ct-5-banner': SectionCt5Banner;
      'section.curriculum': SectionCurriculum;
      'section.demand-increased': SectionDemandIncreased;
      'section.enterprise-review': SectionEnterpriseReview;
      'section.enterprises-are-saying': SectionEnterprisesAreSaying;
      'section.exclusive-bonuses': SectionExclusiveBonuses;
      'section.faq-details': SectionFaqDetails;
      'section.faq-details-on-course': SectionFaqDetailsOnCourse;
      'section.get-certified-get-noticed': SectionGetCertifiedGetNoticed;
      'section.highlights': SectionHighlights;
      'section.horizontal-menu': SectionHorizontalMenu;
      'section.industry-leaders': SectionIndustryLeaders;
      'section.learners-overthen-globe': SectionLearnersOverthenGlobe;
      'section.learning-path': SectionLearningPath;
      'section.left-side-bar-menus': SectionLeftSideBarMenus;
      'section.meet-the-team': SectionMeetTheTeam;
      'section.meet-the-team-more-details': SectionMeetTheTeamMoreDetails;
      'section.meet-the-team-success': SectionMeetTheTeamSuccess;
      'section.our-support-system': SectionOurSupportSystem;
      'section.pop-up-details': SectionPopUpDetails;
      'section.prerequisites-for-training': SectionPrerequisitesForTraining;
      'section.primary-highlights': SectionPrimaryHighlights;
      'section.project-management-team': SectionProjectManagementTeam;
      'section.quick-facts': SectionQuickFacts;
      'section.related-courses': SectionRelatedCourses;
      'section.review-details': SectionReviewDetails;
      'section.social-network-ratings': SectionSocialNetworkRatings;
      'section.superior-outcome': SectionSuperiorOutcome;
      'section.talk-to-an-advisor': SectionTalkToAnAdvisor;
      'section.training-options': SectionTrainingOptions;
      'section.trending-courses': SectionTrendingCourses;
      'section.trending-courses-in-other-cities': SectionTrendingCoursesInOtherCities;
      'section.usp-s-or-why-us': SectionUspSOrWhyUs;
      'section.who-should-attend-course': SectionWhoShouldAttendCourse;
      'section.why-profela': SectionWhyProfela;
      'section.why-teach-at-profela': SectionWhyTeachAtProfela;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
