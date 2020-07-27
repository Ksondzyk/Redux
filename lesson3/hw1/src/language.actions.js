export const LANGUAGE = "CURRENT/LANGUAGE";

export const setLanguage = (curentLanguage) => {
  return {
    type: LANGUAGE,
    language: { curentLanguage },
  };
};
