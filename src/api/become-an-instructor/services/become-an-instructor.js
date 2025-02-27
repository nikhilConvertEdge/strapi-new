'use strict';

/**
 * become-an-instructor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::become-an-instructor.become-an-instructor');
