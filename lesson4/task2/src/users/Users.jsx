import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "./users.actions";

class Users extends Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.createUser(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button onClick={this.onUserCreate} className="users__create-btn">
          Create user
        </button>
        <ul className="users__list">
          {users.map(({ name, id }) => (
            <li className="users__list-item" key={id}>
              <span>{name}</span>
              <button
                onClick={() => deleteUser(id)}
                className="users__delete-btn"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: userAction.addUser,
  deleteUser: userAction.deleteUser,
};
const connector = connect(mapState, mapDispatch);
const connectedComponent = connector(Users);
export default connectedComponent;
