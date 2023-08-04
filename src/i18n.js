import i18next from "i18next";
// ...
const resources = {
  en: {
    translation: {
      app_name: "Welcome Centime technology",
    },
  },
  ar: {
    translation: {
      app_name: "جروتباسكت جروتباسكت",
    },
  },
  ru: {
    translation: {
        app_name: "Добро пожаловать в технологию Centime"
    }
  }
};
i18next
  // ...
  .init({
    resources,
    // lng: "ar", // Active language will be Arabic
    // lng: "en",
    lng: "ru" // Russia

  });
export default i18next;