import { LANGUAGE } from "./language.actions";

export const lenguageReducer = (state = "en", action) => {
  console.log(action);
  switch (action.type) {
    case LANGUAGE: {
      return { ...state, ...action.language.curentLanguage };
    }
    default:
      return state;
  }
};
