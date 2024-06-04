import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
export default class index extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* 对NavLink的二次封装 */}
        <NavLink
          className="navlink"
          activeClassName="active-navlink"
          {...this.props}
        />
      </div>
    );
  }
}
