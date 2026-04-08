import type { Core } from "@strapi/strapi";
// config/plugins.js
module.exports = ({ env }) => ({
  "strapi-v5-plugin-populate-deep": {
    config: {
      defaultDepth: 10, // default: 5
    },
  },
});
