import React from "react";
import { connect } from "react-redux";
import { userAction } from "./users.actions";
import { filterTextSelector, usersListSelector } from "./users.selectors";
import User from "./User";
import Filter from "../Filter";

const UsersList = ({ filterText, users, func }) => {
  const handleChange = (event) => {
    func(event.target.value.toLowerCase());
  };

  console.log(users);
  let result;
  if (!filterText) {
    result = users;
  } else {
    result = users.filter(({ name }) => {
      return name.toLowerCase().includes(filterText);
    });
  }

  return (
    <div>
      <Filter
        onChange={handleChange}
        filterText={filterText}
        count={result.length}
      />
      <ul className="users">
        {result.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    filterText: filterTextSelector(state),
    users: usersListSelector(state),
  };
};
const mapDispatch = {
  func: userAction,
};

const connector = connect(mapState, mapDispatch)(UsersList);
export default connector;
