export const ADDUSER = "USER/ADDUSER";
export const DELETEUSER = "USER/DELETEUSER";

export const addUser = () => {
  return {
    type: ADDUSER,
  };
};

export const deleteUser = () => {
  return {
    type: DELETEUSER,
  };
};
