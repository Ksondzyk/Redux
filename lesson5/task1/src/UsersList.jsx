import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import { increment, decrement } from "./currentPage.action";
import { usersListSelector, currentPageSelector } from "./users.selectors";

const UsersList = ({ currentPage, goPrev, goNext, users }) => {
  const itemsPerPage = 3;
  const start = currentPage * itemsPerPage;

  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapDispatch = {
  goPrev: decrement,
  goNext: increment,
};
const mapState = (state) => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};
const connector = connect(mapState, mapDispatch);
const conectElement = connector(UsersList);
export default conectElement;
