'use strict';

/**
 * all-event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::all-event.all-event');
