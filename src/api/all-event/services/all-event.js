'use strict';

/**
 * all-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-event.all-event');
