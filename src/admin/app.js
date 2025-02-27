import Favicon from "./../extensions/favicon.png";
import Logo from "../../public/uploads/profela-logo.png";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    colors: {
      primary100: "#f6ecfc",
      primary200: "#aaf1d0",
      primary500: "#08c4dc",
      primary600: "#0893ea",
      primary700: "#0b72bf",
      danger700: "#b72b1a",
      active: "#3d7cf1",
    },
  },
  head: { favicon: Favicon },
  auth: { logo: Logo },
  menu: { logo: Logo },
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to profela App!",
      "Auth.form.welcome.subtitle": "Log in to profela App",
      "app.components.LeftMenu.navbrand.title": "CMS DASHBOARD",
      "app.components.LeftMenu.navbrand.workplace": "Admin",
      "app.components.HomePage.welcome": "Welcome to profela Cms Admin",
      "app.components.HomePage.welcome.again": "Welcome to profela Cms Admin",
      "app.components.HomePage.welcomeBlock.content":
        "Congrats! You are logged as the profela Cms admin....",
      "app.components.HomePage.welcomeBlock.content.again":
        "Congrats! You are logged as the profela Cms admin....",
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
