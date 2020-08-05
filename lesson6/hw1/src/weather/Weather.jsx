import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUserdata } from "./weather.actions";
import { userCitiesSelector } from "./users.selectors";

const Weather = ({ fetchUserdata, userData }) => {
  useEffect(() => {
    fetchUserdata();
  }, [userData]);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {userData(({ id, temperature, name }) => (
          <li className="city" key={id}>
            <span className="city__name">{name}</span>
            <span className="city__temperature">{temperature}</span>
          </li>
        ))}
        {/* <li className="city">
          <span className="city__name">name</span>
          <span className="city__temperature">temperature</span>
        </li>
        <li className="city">
          <span className="city__name">name</span>
          <span className="city__temperature">temperature</span>
        </li> */}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    userData: userCitiesSelector(state),
  };
};
const mapDispatch = {
  fetchUserdata,
};
export default connect(mapState, mapDispatch)(Weather);
