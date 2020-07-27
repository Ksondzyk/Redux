import { LANGUAGE } from "./language.actions";

export const lenguageReducer = (state = "", action) => {
  console.log(action);
  switch (action.type) {
    case LANGUAGE: {
      return action.language.curentLanguage;
    }
    default:
      return state;
  }
};
