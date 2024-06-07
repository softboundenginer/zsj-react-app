import React, { Component } from "react";
import Header from "../Header/index";
import List from "../List/index";
import Footer from "../Footer/index";

export default class index extends Component {
  state={
    todos:[
    {id:'001',name:'吃饭',isDone:true},
    {id:'002',name:'睡觉',isDone:true},
    {id:'003',name:'游戏',isDone:true},
    {id:'004',name:'kissKiss',isDone:true}]
  }
  addTodos=(todoObj)=>{
    const { todos } = this.state;
    const newTodos=[todoObj,...todos];
    this.setState({todos:newTodos});
  }
  updateTodos=(id,isDone)=>{
    const { todos } = this.state;
    const newTodos = todos.map(todoObj=>{
      if(todoObj.id === id){
        return {...todoObj, isDone:isDone}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodos});
  }
  deleteTodos=(id)=>{
    const { todos } = this.state;
    const newTodos = todos.filter(todoObj=>{
      return todoObj.id!==id
    })
    this.setState({todos:newTodos});
  }
  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodos={this.addTodos}/>
        <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos}/>
        <Footer todos={todos}/>
      </div>
    );
  }
}
