import { USER_DATA_CITY } from "./weather.actions";

const initialData = {
  userData: null,
};

export const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case USER_DATA_CITY: {
      return {
        ...state,
        userData: action.payload.userData,
      };
    }
    default:
      return state;
  }
};
