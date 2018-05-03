import React, { PureComponent } from 'react'
import IllegalIcon from 'react-icons/lib/fa/times-circle'
import LegalIcon from 'react-icons/lib/fa/check'
import reactStringReplace from 'react-string-replace'
import isEmpty from 'lodash/isEmpty'
import { capitalizeFirstLetter } from '../../helpers'

export default class FoodItem extends PureComponent {
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
  renderDescription(food) {
    if (isEmpty(food.description.trim())) return null

    const parsedDescription = reactStringReplace(food.description.trim(), /(https?:\/\/\S+)/g, (match, i) => (
      <a target="_blank" key={match + i} href={match}>{match}</a>
    ))

    return (
      <div
        className="padding-right"
      >
        <p
          className="item-description-visible"
        >{parsedDescription}
        </p>
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
