import React, { Component } from 'react'
import IllegalIcon from 'react-icons/lib/fa/times-circle'
import LegalIcon from 'react-icons/lib/fa/check'
import AngleDown from 'react-icons/lib/fa/angle-down'
import AngleUp from 'react-icons/lib/fa/angle-up'
import Truncate from 'react-truncate'

import localization from '../../Localization'

export default class FoodItem extends Component {
  constructor(props) {
    super(props)

    this.expandItem = this.expandItem.bind(this)
    this.onTruncate = this.onTruncate.bind(this)

    this.state = {
      isExpanded: false,
      isLong: false,
    }
  }
  expandItem() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  renderLegalIcon(isLegal) {
    return (
      isLegal ? (<LegalIcon
        color="#7FB222"
        className="icon-row"
      />) :
        (<IllegalIcon
          color="#AB4A4A"
          className="icon-row"
        />)
    )
  }
  renderItemArrow() {
    return (
      this.state.isExpanded ?
        <AngleUp
          onClick={this.expandItem}
          size={32}
          className="item-arrow"
        /> :
        <AngleDown
          onClick={this.expandItem}
          size={32}
          className="item-arrow"
        />
    )
  }
  onTruncate(isLong) {
    this.setState({
      isLong,
    })
  }
  renderDescription(food) {
    let description

    if (localization.getLanguage() === 'GB') {
      description = food.description
    } else {
      description = food.lisätieto
    }

    return (
      <div
        className="padding-right"
      >
        {description && <div className="padding-hack" />}
        {description &&
        <Truncate
          onTruncate={this.onTruncate}
          lines={this.state.isExpanded ? 999 : 1}
          className="item-description"
        >
          {description}
        </Truncate>}

        {description && <div className="padding-hack" />}
        {this.state.isLong && this.renderItemArrow()}
      </div>
    )
  }
  render() {
    const { food } = this.props

    return (
      <div
        className="item-row"
        key={food.food}
      >
        <p className="item-name">
          {localization.getLanguage() === 'GB' ? food.food : food.ruoka}
        </p>

        {this.renderLegalIcon(food.legal.toLowerCase().trim() === 'legal')}
        {this.renderDescription(food)}

      </div>
    )
  }
}
