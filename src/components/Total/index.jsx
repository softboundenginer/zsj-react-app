import React, { Component } from "react";
import Header from "../Header/index";
import List from "../List/index";
import Footer from "../Footer/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}
