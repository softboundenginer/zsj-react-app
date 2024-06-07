import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./index.css";
export default class index extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    checkAllTodos:PropTypes.func.isRequired,
    clearAllDone:PropTypes.func.isRequired,
  }
  handleCheckAll=(event)=>{
    const {checked} = event.target
    this.props.checkAllTodos(checked);
  }
  handleClearALL=()=>{
      this.props.clearAllDone()
  }
  render() {
    const {todos}=this.props;
    const doneCount = todos.reduce((pre,current)=>{return pre+(current.isDone?1:0)},0);
    const total = todos.length;
    return <div className="text_footer">
      <span><input type="checkbox" checked={doneCount=== total && total !==0 ? true : false} onChange={this.handleCheckAll}/> 已完成{doneCount}/全部{total}</span>
      <button onClick={this.handleClearALL} className="btn">清除已完成项</button>
      </div>;
  }
}
