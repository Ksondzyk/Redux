import { createSelector } from "reselect";

export const filterTextSelector = (state) => {
  return state.users.filterText;
};

export const usersListSelector = (state) => {
  return state.users.usersList;
};

export const filterUsersSelector = createSelector([
  filterTextSelector,
  usersListSelector,
]);
