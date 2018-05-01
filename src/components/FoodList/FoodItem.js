import React, { Component } from 'react'
import IllegalIcon from 'react-icons/lib/fa/times-circle'
import LegalIcon from 'react-icons/lib/fa/check'
import AngleDown from 'react-icons/lib/fa/angle-down'
import AngleUp from 'react-icons/lib/fa/angle-up'
import Truncate from 'react-truncate'
import reactStringReplace from 'react-string-replace'
import _ from 'lodash'
import { capitalizeFirstLetter } from '../../helpers'

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
    // Call once
    if (this.onTruncateCalled) {
      return
    }

    this.onTruncateCalled = true

    this.setState({
      isLong,
    })
  }
  renderDescription(food) {
    if (_.isEmpty(food.description.trim())) return null

    const parsedDescription = reactStringReplace(food.description.trim(), /(https?:\/\/\S+)/g, (match, i) => (
      <a target="_blank" key={match + i} href={match}>{match}</a>
    ))

    return (
      <div
        className="padding-right"
      >
        <div className="padding-hack" />

        {
          // This is a hack to do two things:
          // 1. Have text with html tags truncated. Truncate package does not support html tags.
          // 2. Detecting when text is truncated with the Truncate package.
        }
        <Truncate
          onTruncate={this.onTruncate}
          lines={this.state.isExpanded ? 999 : 1}
          className="item-description-hidden"
        >
          {parsedDescription}
        </Truncate>

        <p
          className={this.state.isExpanded ? 'item-description-visible' : 'item-description-visible-truncated'}
        >{parsedDescription}
        </p>

        <div className="padding-hack" />
        {this.state.isLong && this.renderItemArrow()}
      </div>
    )
  }
  render() {
    const { food } = this.props

    return (
      <div
        className="item-row"
        key={food.name}
      >
        <p className="item-name">
          {capitalizeFirstLetter(food.name)}
        </p>

        {this.renderLegalIcon(food.legal.toLowerCase().trim() === 'legal')}
        {this.renderDescription(food)}

      </div>
    )
  }
}
