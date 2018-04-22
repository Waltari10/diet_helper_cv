import React, { Component } from 'react'
import './styles.css'
import localization from '../../Localization'

export default class Header extends Component {
  render() {
    return (
      <div className="header-image" alt="blueberries">
        <h1 className="site-title">{localization.SCD_diet}</h1>
      </div>
    )
  }
}
