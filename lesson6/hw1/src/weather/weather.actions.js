import { getWeatherData } from "./users.gateway";

export const SHOW_DATA_CITY = "SER_DATA_CITY";

export const userDateRecieved = (cities) => {
  return {
    type: SHOW_DATA_CITY,
    payload: {
      cities,
    },
  };
};

export const fetchUserdata = () => {
  return function (dispatch) {
    getWeatherData().then((userData) => {
      dispatch(userDateRecieved(userData));
    });
  };
};
