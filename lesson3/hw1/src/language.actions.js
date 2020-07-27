export const LANGUAGE = "CURRENT/LANGUAGE";

export const setLanguage = (curentLanguage) => {
  return {
    type: LANGUAGE,
    language: {
      curentLanguage,
    },
  };
};

// const userLang = navigator.language || navigator.userLanguage;
// console.log(navigator.language.toString());
