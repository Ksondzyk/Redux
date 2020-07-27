import { SET_USER, REMOVE_USER } from "./user.actions";

export const usersReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      if (action.payload.userData === undefined) {
        return state;
      }
      return action.payload.userData;
    case REMOVE_USER: {
      return null;
    }
    default:
      return state;
  }
};

export default usersReducer;
