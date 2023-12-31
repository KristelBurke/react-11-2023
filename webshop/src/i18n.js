import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "maintain-categories": "Maintain categories",
        "maintain-shops": "Maintain shops",
        "add-products": "Add products",
        "maintain-products": "Maintain products",
        "admin": "To admin view",
        "shops": "Our shops",
        "contact": "Contact us",
        "cart": "To cart",
        
    }
  },
  ee: {
    translation: {
        "maintain-categories": "Halda kategooriaid",
        "maintain-shops": "Halda poode",
        "add-products": "Lisa toode",
        "maintain-products": "Halda tooteid",
        "admin": "Admin vaatesse",
        "shops": "Meie poed",
        "contact": "Kontakteeru meiega",
        "cart": "Ostukorvi",
    }
  },

  fin: {
    translation: {
        "maintain-categories": "Säilytä luokkia",
        "maintain-shops": "Ylläpidä kauppoja",
        "add-products": "Lisää tuote",
        "maintain-products": "Ylläpidä tuotteita",
        "admin": "Järjestelmänvalvojanäkymään",
        "shops": "Meidän kaupat",
        "contact": "Ota meihin yhteyttä",
        "cart": "Kärryyn",
    }
  },

  rus: {
    translation: {
        "maintain-categories": "Управление категориями",
        "maintain-shops": "Управление магазинами",
        "add-products": "Добавить продукт",
        "maintain-products": "Управление продуктами",
        "admin": "K представлению администратора",
        "shops": "Наши магазины",
        "contact": "Связаться с нами",
        "cart": "Корзина",
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;