import { ADDUSER, DELETEUSER } from "./users.actions";

const actionCreators = {
  usersList: [],
};

export const usersReducer = (state = actionCreators, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat({ id: action.id, name: "Sarah" }),
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id === action.id),
      };

    default:
      return state;
  }
};
