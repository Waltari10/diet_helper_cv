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
  onTruncate() {
    this.setState({
      isLong: true,
    })
  }
  renderDescription(food) {
    return (
      <div
        className="padding-right"
      >
        <div className="padding-hack" />
        <Truncate
          onTruncate={this.onTruncate}
          lines={this.state.isExpanded ? 999 : 1}
          className="item-description-child"
        >
          {food.description}
        </Truncate>

        <div className="padding-hack" />
        {this.state.isLong && this.renderItemArrow()}
      </div>
    )
  }
  render() {
    const fo = this.props.food

    const food = {
      ...fo,
      description: 'Anim aute pariatur duis nisi duis pariatur pariatur aute veniam.Excepteur ea cillum nisi occaecat.Sunt Lorem labore ad pariatur aute deserunt.Aliqua eu ipsum do aliquip consectetur veniam Lorem in dolore mollit quis Ad exercitation labore et dolor adipisicing cillum culpa et.',
    }

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
