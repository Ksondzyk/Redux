import { SET_USER, REMOVE_USER } from "./users.actions";

const initialState = {
  usersList: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case REMOVE_USER: {
      const newList = state.usersList.filter(
        (user) => user.id !== action.payload.userId
      );
      return {
        ...state,
        usersList: newList,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
