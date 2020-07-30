export const USER_ACTION = "USERS/USER_ACTION ";

export const userAction = (textId) => {
  return {
    type: USER_ACTION,
    filterText: {
      textId,
    },
  };
};
