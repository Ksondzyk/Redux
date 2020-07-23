export const ADDUSER = "USER/ADDUSER";
export const DELETEUSER = "USER/DELETEUSER";

export const addUser = (user) => {
  return {
    type: ADDUSER,
    user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    id,
  };
};
