import { LANGUAGE } from "./language.actions";

const lenguageCurrent = {
  lenguage: [],
};
export const lenguageReducer = (state = lenguageCurrent, action) => {
  console.log(action);
  switch (action.type) {
    case LANGUAGE: {
      const { curentLanguage } = action.language;
      return {
        ...state,
        lenguage: curentLanguage,
      };
    }

    default:
      return state;
  }
};
