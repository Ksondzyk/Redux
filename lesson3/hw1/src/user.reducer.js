import { SET_USER, REMOVE_USER } from "./user.actions";

export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload.userData };
    case REMOVE_USER: {
      return null;
    }
    default:
      return state;
  }
};

export default usersReducer;
