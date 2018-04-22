import React, { Component } from 'react'
import AngleDown from 'react-icons/lib/fa/angle-down'
import AngleUp from 'react-icons/lib/fa/angle-up'
import Flag from 'react-world-flags'
import './styles.css'

export default class LanguagePicker extends Component {
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
  }
  renderDropDown() {
    return (
      <div className="language-picker-drop-down">
        <div
          className="language-row"
          onClick={() => this.selectLanguage('FI')}
        >
          <p className="country-code">FI</p>
          <Flag
            height={15}
            className="flag"
            code="FI"
          />
        </div>
        <div
          className="language-row"
          onClick={() => this.selectLanguage('GB')}
        >
          <p className="country-code">GB</p>
          <Flag
            height={15}
            className="flag"
            code="GB"
          />
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
        <Flag
          height={15}
          className="flag"
          code={this.props.countryCode}
        />
      </div>
    )
  }
}
