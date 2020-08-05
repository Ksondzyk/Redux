import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserdata } from "./weather.actions";
import { userCitiesSelector } from "./users.selectors";

const Weather = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchUserdata();
  }, [props, props.userData]);

  if (props.userData === null) {
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {props.userData(({ id, temperature, name }) => (
          <li className="city" key={id}>
            <span className="city__name">{name}</span>
            <span className="city__temperature">{temperature}</span>
          </li>
        ))}
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
