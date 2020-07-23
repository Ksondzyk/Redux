import { ADDUSER, DELETEUSER } from "./users.actions";

const actionCreators = {
  usersList: [],
};
console.log(actionCreators.usersList);
export const usersReducer = (state = actionCreators, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        usersList: state.usersList.concat({ id: 76, name: "Sarah" }),
      };
    case DELETEUSER:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== 76),
      };

    default:
      return state;
  }
};
