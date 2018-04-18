import React, { Component } from 'react';
import style from './styles.css'
import localization from '../../Localization.js'

export default class Header extends Component {
  render() {
    return (
      <div className="header-image" alt="blueberries">
        <h1 className="site-title">{localization.SCD_diet}</h1>
      </div>
    );
  }
}
