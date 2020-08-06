import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUserdata } from "./weather.actions";
import { userCitiesSelector } from "./users.selectors";

const Weather = ({ fetchUser, cities }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  if (cities === null) {
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map(({ id, temperature, name }) => (
          <li className="city" key={id}>
            <span className="city__name">{name}</span>
            <span className="city__temperature">{`${temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    cities: userCitiesSelector(state),
  };
};
const mapDispatch = {
  fetchUser: fetchUserdata,
};
export default connect(mapState, mapDispatch)(Weather);
