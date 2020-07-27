export const LANGUAGE = "CURRENT/LANGUAGE";

export const setLanguage = (curentLanguage = "en") => {
  return {
    type: LANGUAGE,
    language: { curentLanguage },
  };
};
