import React, { PureComponent } from 'react'
import AngleDown from 'react-icons/lib/fa/angle-down'
import AngleUp from 'react-icons/lib/fa/angle-up'
import './styles.css'

export default class LanguagePicker extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.selectLanguage = this.selectLanguage.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  selectLanguage(countryCode) {
    this.props.setLanguage(countryCode)
    this.setState({
      isOpen: false,
    })
    localStorage.setItem('countryCode', countryCode)
  }
  renderDropDown() {
    return (
      <div className="language-picker-drop-down">
        <div
          className="language-row"
          onClick={() => this.selectLanguage('FI')}
        >
          <p className="country-code">FI</p>
          <div className="FI flag" />
        </div>
        <div
          className="language-row"
          onClick={() => this.selectLanguage('EN')}
        >
          <p className="country-code">EN</p>
          <div className="EN flag" />
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="language-picker">
        {this.state.isOpen && this.renderDropDown()}
        {this.state.isOpen ?
          <AngleUp
            onClick={
              this.onClick
            }
            size={20}
            className="angle"
          /> :
          <AngleDown
            onClick={this.onClick}
            size={20}
            className="angle"
          />
        }
        <div className={`${this.props.countryCode} flag`} />
      </div>
    )
  }
}
