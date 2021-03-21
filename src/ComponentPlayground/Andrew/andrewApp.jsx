import React, { Component } from "react";
import FoodMenu from "./foodMenu";
import Header from "./header";

class AndrewApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <FoodMenu />
      </div>
    );
  }
}

export default AndrewApp;
