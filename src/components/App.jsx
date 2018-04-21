
import React, { Component } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'
import FoodList from './FoodList/index'
import LanguagePicker from './LanguagePicker/index'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.myForceUpdate = this.myForceUpdate.bind(this)
  }
  myForceUpdate() {
    this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <LanguagePicker
          forceUpdate={this.myForceUpdate}
        />
        <FoodList />
        <Footer />
      </div>
    )
  }
}
