import { addUser, deleteUser, ADDUSER, DELETEUSER } from "./users.actions";

const actionCreators = {
  create: [],
};
export const usersReducer = (state = actionCreators, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        create: state.create.concat(),
      };
    case DELETEUSER:
      return {
        ...state,
        create: state.create.filter(({ id }) => !id),
      };

    default:
      return state;
  }
};
