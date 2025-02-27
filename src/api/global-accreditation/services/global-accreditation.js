'use strict';

/**
 * global-accreditation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-accreditation.global-accreditation');
