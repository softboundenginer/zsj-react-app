import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./index.css";
export default class index extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
  }
  render() {
    const {todos}=this.props;
    return <div className="text_footer">
      <span><input type="checkbox"/> 已完成/全部</span>
      <button className="btn">清除已完成项</button>
      </div>;
  }
}
