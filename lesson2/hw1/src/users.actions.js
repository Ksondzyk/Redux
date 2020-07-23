export const ADDUSER = "USER/ADDUSER";
export const DELETEUSER = "USER/DELETEUSER";

export const addUser = () => {
  return {
    type: ADDUSER,
    id: 76,
  };
};

export const deleteUser = () => {
  return {
    type: DELETEUSER,
    id: 76,
  };
};
