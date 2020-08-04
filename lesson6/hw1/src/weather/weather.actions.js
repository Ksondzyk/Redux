import { getCityData } from "./users.gateway";

export const USER_DATA_CITY = "SER_DATA_CITY";

export const userDateRecieved = (userData) => {
  return {
    type: USER_DATA_CITY,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = () => {
  return function (dispatch) {
    getCityData()
      .then((userData) => {
        dispatch(userDateRecieved(userData));
        dispatch(console.log(userData));
        debugger;
      })
      .then((user) => console.log(user));
  };
};
