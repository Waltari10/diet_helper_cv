
import React, { Component } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'
import FoodList from './FoodList/index'
import LanguagePicker from './LanguagePicker/index'
import './App.css'
import localization from '../Localization'

/* eslint react/no-unused-state: 0 */

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countryCode: 'FI',
    }

    this.setLanguage = this.setLanguage.bind(this)
  }
  setLanguage(countryCode) {
    localization.setLanguage(countryCode)
    this.setState({
      countryCode: localization.getLanguage(),
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <LanguagePicker
          setLanguage={this.setLanguage}
          countryCode={this.state.countryCode}
        />
        <FoodList />
        <Footer />
      </div>
    )
  }
}
