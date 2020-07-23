import { ADDUSER, DELETEUSER } from "./users.actions";

const actionCreators = {
  usersList: [],
};

export const usersReducer = (state = actionCreators, action) => {
  const { usersList } = state;
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: usersList.concat(action.user),
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: usersList.filter(({ id }) => id !== action.id),
      };

    default:
      return state;
  }
};
