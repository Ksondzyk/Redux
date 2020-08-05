import { SHOW_DATA_CITY } from "./weather.actions";

const initialData = {
  city: null,
};

export const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_DATA_CITY: {
      return {
        ...state,
        city: action.payload.cities,
      };
    }
    default:
      return state;
  }
};
