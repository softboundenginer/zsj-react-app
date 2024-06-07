import React, { Component } from 'react'
import Header from '../Header/index'
import Footer from '../Footer/index'
import List from '../List/index'
export default class index extends Component {
  render() {
    return (
      <div> 
      <Header />
      <List />
      <Footer />
      </div>
    )
  }
}
