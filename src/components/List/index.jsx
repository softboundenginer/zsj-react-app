import React, { Component } from "react";
import Item from '../Item/index'
import PropTypes from 'prop-types';
import "./index.css";
export default class index extends Component {
  static propTypes = {
    updateTodos:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
    deleteTodos:PropTypes.func.isRequired,
  }
  render() {
    const {todos,updateTodos,deleteTodos}=this.props;
    return (
    <div className="text">
    <ul style={{  listStyle: 'none',paddingLeft:'300px',minHeight:'100px'}}>
        {todos.map(todos=>{
            return <Item key={todos.id} {...todos} updateTodos={updateTodos} deleteTodos={deleteTodos}/>
        })}
    </ul>
    </div>
    )
  }
}
