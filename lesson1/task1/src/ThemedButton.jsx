import React, { Component } from "react";
import { ThemeContex } from "./themes-contex";

class ThemedButton extends Component {
  render() {
    console.log(this.context);
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}
ThemedButton.contextType = ThemeContex;
export default ThemedButton;
