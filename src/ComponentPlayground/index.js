import React from "react";

import ChrisTest from "./Chris/card";
import Header from "./Andrew/header";

import { ANDREW, CHRIS, SAM } from "../Assets/constants.js";


export default (props) => {
  const renderPlayground = () => {
    let component = <div></div>;

    switch (props.selectedUser) {
      case ANDREW:
        component = <div>Andrew</div>;
        break;
      case CHRIS:
        component = <ChrisTest />;
        break;
      case SAM:
        component = <div>Sam</div>;
        break;
      default:
        component = <div>Choose a playground</div>;
    }

    return component;
  };

  return renderPlayground();
};
