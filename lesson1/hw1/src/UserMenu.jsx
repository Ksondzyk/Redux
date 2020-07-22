import React, { Component } from "react";
import { DateContext } from "./date-context";

class UserMenu extends Component {
  render() {
    console.log(this.context);
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, Nikola Tesla</span>
        <img
          alt="User Avatar"
          src="https://avatars3.githubusercontent.com/u10001"
          className="menu__avatar"
        />
      </div>
    );
  }
}
UserMenu.contextType = DateContext;
export default UserMenu;
