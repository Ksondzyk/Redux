import { getCityData } from "./users.gateway";

export const USER_DATA_CITY = "SER_DATA_CITY";

export const userDateRecieved = (user) => {
  return {
    type: USER_DATA_CITY,
    user,
  };
};

export const fetchUserData = (userId) => {
  return function (dispatch) {
    getCityData(userId).then((userData) => {
      dispatch(userDateRecieved(userData));
    });
  };
};
