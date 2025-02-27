const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'custom-dropdown',
    plugin: 'custom-dropdown',
    type: 'string',
  });
};

export default register;
