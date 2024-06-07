import React, { Component } from "react";
import header from "./index.module.css";
import { nanoid } from "nanoid";
export default class index extends Component {
  changeKeyUp=(event)=>{
    const {keyCode,target:{value}} = event
    const {addTodos}=this.props
    if(keyCode === 13){
      if(value.trim() === ''){
        alert('输入不能为空！！！')
        return 
      }  
    const todoObj={ id:nanoid(),name:value,isDone:false}
    addTodos(todoObj)
    event.target.value = ''
    }
  };
  render() {
    return <div className={header.text}>
      <input ref={sb=>{this.inpt=sb}} className={header.inpt} onKeyUp={this.changeKeyUp} type="text" placeholder="请按回车键输入待办事项..."/>
    </div>;
  }
  componentDidMount(){
      this.inpt.focus();
  }
}
