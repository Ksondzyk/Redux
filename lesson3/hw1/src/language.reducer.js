import { LANGUAGE } from "./language.actions";

export const lenguageReducer = (state = "en", action) => {
  console.log(action);
  switch (action.type) {
    case LANGUAGE: {
      if (action.language.curentLanguage === undefined) {
        return state;
      }
      return action.language.curentLanguage;
    }
    default:
      return state;
  }
};
