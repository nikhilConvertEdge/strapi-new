'use strict';

/**
 * event-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-header.event-header');
