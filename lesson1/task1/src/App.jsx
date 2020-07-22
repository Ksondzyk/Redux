import React, { Component } from "react";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContex } from "./themes-contex";

class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.ligth : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };
  render() {
    return (
      <div>
        <ThemeContex.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContex.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
