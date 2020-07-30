import React from "react";
import { connect } from "react-redux";
import { filterTextSelector, usersListSelector } from "./users.selectors";
import User from "./User";
import Filter from "../Filter";

const UsersList = ({ func, text, users }) => {
  let result;
  if (!text) {
    result = users;
  } else {
    result = users.filter(({ name }) => {
      return name.toLowerCase().includes(text);
    });
  }

  console.log(result.length);
  return (
    <div>
      <Filter onChange={func} filterText={text} count={result.length} />
      <ul className="users">
        {result.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return { text: filterTextSelector(state), users: usersListSelector(state) };
};
const mapDispatch = {
  func: (event) => event.target.value.toLowerCase(),
};

const connector = connect(mapState, mapDispatch)(UsersList);
export default connector;
