import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'
export default class index extends Component {
  static propTypes = {
    updateTodos:PropTypes.func.isRequired,
    deleteTodos:PropTypes.func.isRequired,
  }
  state={
    mouse:false
  }
  changeCheckBox=(id)=>{
    return (event)=>{
      const {checked}=event.target
      this.props.updateTodos(id,checked)
    }
  }
  handleMouse=(val)=>{
    return ()=>{
      this.setState({mouse:val})
    }
  }
  handleDelete=(id)=>{
    return ()=>{
      if(window.confirm('确定删除嘛？')){this.props.deleteTodos(id)}
    }
  }
  render() {
    const {id,name,isDone} = this.props
    const {mouse} = this.state
    return (
      <div onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}  className='big_box' style={{background:mouse?'pink':'',color:mouse?'#000':''}}><li className='item_list'>
        <input type="checkbox" defaultChecked={isDone} onChange={this.changeCheckBox(id)}/>{name}</li>
      <button onClick={this.handleDelete(id)} style={{display:mouse ? 'block' : 'none',background:'red',color:'#fff',borderRadius:'24px',textAlign:'center'}}>删除</button>
      </div>
    )
  }
}
