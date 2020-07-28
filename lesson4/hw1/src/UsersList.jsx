import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import { increment, decrement } from "./currentPage.action";
import { usersAction } from "./users.action";

class UsersList extends Component {
  render() {
    const { goPrev, goNext, users } = this.props;
    const { currentPage, usersList } = users;
    console.log(this.props);
    const itemPage = {
      itemsPerPage: 3,
    };
    const { itemsPerPage } = itemPage;
    const start = currentPage * itemsPerPage;
    const usersToDisplay = usersList.slice(start, start + itemsPerPage);
    console.log(itemsPerPage);
    return (
      <div>
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={usersList.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
const mapDispatch = {
  goPrev: decrement,
  goNext: increment,
};
const mapState = (state) => {
  return {
    users: state,
  };
};
const connector = connect(mapState, mapDispatch);
const conectElement = connector(UsersList);
export default conectElement;
