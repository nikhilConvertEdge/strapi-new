import { PLUGIN_ID } from './pluginId';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app) {
    // app.addMenuLink({
    //   to: `plugins/${PLUGIN_ID}`, // Fixed: Use PLUGIN_ID instead of PluginIcon
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${PLUGIN_ID}.plugin.name`,
    //     defaultMessage: PLUGIN_ID,
    //   },
    //   Component: async () => {
    //     const { App } = await import('./pages/App');
    //     return App;
    //   },
    // });

    // app.registerPlugin({
    //   id: PLUGIN_ID,
    //   initializer: Initializer,
    //   isReady: false,
    //   name: PLUGIN_ID,
    // });

    app.customFields.register({
      name: 'custom-dropdown',
      pluginId: PLUGIN_ID, // Use PLUGIN_ID instead of hardcoding 'custom-dropdown'
      type: 'string',
      intlLabel: {
        id: `${PLUGIN_ID}.custom-dropdown.label`,
        defaultMessage: 'Custom Dropdown',
      },
      intlDescription: {
        id: `${PLUGIN_ID}.custom-dropdown.description`,
        defaultMessage: 'Add Custom dropdown',
      },
      icon: PluginIcon,
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/select'),
      },
      options: {
        collectionType: null,
      },
    });
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, PLUGIN_ID), // Ensure prefixPluginTranslations is imported
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
