
import React, { Component } from 'react'
import Header from './Header/index'
import Footer from './Footer/index'
import FoodList from './FoodList/index'
import LanguagePicker from './LanguagePicker/index'
import Modal from './Modal/index'
import './App.css'
import localization from '../Localization'

/* eslint react/no-unused-state: 0 */

export default class App extends Component {
  constructor(props) {
    super(props)

    const userLang = navigator.language || navigator.userLanguage
    let parsedUserLang = ''


    if (userLang.indexOf('fi') !== -1) {
      parsedUserLang = 'FI'
    } else {
      parsedUserLang = 'EN'
    }

    const countryCode = localStorage.countryCode || parsedUserLang
    localization.setLanguage(countryCode) // Takes EN and FI
    const showModal = !localStorage.termsAccepted

    this.state = {
      countryCode,
      showModal,
    }

    this.setLanguage = this.setLanguage.bind(this)
    this.dismissModal = this.dismissModal.bind(this)
  }
  setLanguage(countryCode) {
    localization.setLanguage(countryCode)
    this.setState({
      countryCode: localization.getLanguage(),
    })
  }
  dismissModal() {
    localStorage.setItem('termsAccepted', true)
    this.setState({
      showModal: false,
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.showModal ? <Modal
          dismissModal={this.dismissModal}
        /> : null}
        <Header />
        <LanguagePicker
          setLanguage={this.setLanguage}
          countryCode={this.state.countryCode}
        />
        <FoodList />
        <div className="space-filler" />
        <Footer />
      </div>
    )
  }
}
