import React from "react";
import Header from "./Header";
import { DateContext } from "./date-context";

class App extends React.Component {
  state = {
    userData: {
      name: "Nikola Tesla",
      avatar_url: "https://avatars3.githubusercontent.com/u10001",
    },
  };
  render() {
    return (
      <div className="page">
        <DateContext.Provider value={this.state.userData} />
        <Header />
      </div>
    );
  }
}
export default App;
