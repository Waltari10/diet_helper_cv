import React, { Component } from 'react'
import IllegalIcon from 'react-icons/lib/fa/times-circle'
import LegalIcon from 'react-icons/lib/fa/check'
import { getEditDistance, capitalizeFirstLetter, getWordPercentageMatch } from '../../helpers'

import './styles.css'
import localization from '../../Localization'
import csv from './foodData'

export default class FoodList extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = {
      foods: [],
      locale: localization.getLanguage(),
    }
    this.foodData = this.parseCSV(csv)
  }
  // TODO this is risky...
  componentWillUpdate() {
    if (this.state.locale === localization.getLanguage()) return

    this.setState({
      foods: this.getVisibleFoods(this.state.searchValue),
      locale: localization.getLanguage(),
    })
  }
  getVisibleFoods(searchValue) {
    if (!searchValue) return []

    const foods = this.foodData.sort((a, b) => {
      const aFood = localization.getLanguage() === 'GB' ? a.food : a.ruoka
      const bFood = localization.getLanguage() === 'GB' ? b.food : b.ruoka

      const aMatch = getWordPercentageMatch(aFood.toLowerCase(), searchValue.toLowerCase())
      const bMatch = getWordPercentageMatch(bFood.toLowerCase(), searchValue.toLowerCase())

      return bMatch - aMatch
    })

    return foods.slice(0, 20)
  }
  onChange(event) {
    const searchValue = event.target.value.toLowerCase().trim()

    const foods = this.getVisibleFoods(searchValue)

    this.setState({
      foods,
      searchValue,
    })
  }
  parseCSV(csvString) {
    const csvRows = csvString.split('\n')
    const keys = csvRows[0].split(',').map(k => k.trim())

    const objArray = csvRows.map((rowText, i) => {
      // set key row undefined
      if (i === 0) return undefined

      const row = rowText.split(',')
      const obj = {}

      for (let k = 0; k < keys.length; k++) {
        obj[keys[k]] = capitalizeFirstLetter(row[k])
      }

      return obj
    })

    // remove undefined
    objArray.shift()

    return objArray
  }
  renderFoodItem(food) {
    return (
      <div
        className="item-row"
        key={food.food}
      >
        <p>
          {localization.getLanguage() === 'GB' ? food.food : food.ruoka}
        </p>

        { food.legal.toLowerCase().trim() === 'legal' ?
          <LegalIcon
            color="#7FB222"
            className="icon-row"
          /> :
          <IllegalIcon
            color="#AB4A4A"
            className="icon-row"
          />
        }
      </div>
    )
  }
  renderFoodList() {
    return this.state.foods.map(this.renderFoodItem)
  }
  renderSearchBar() {
    return (
      <input
        onChange={this.onChange}
        className="search-bar"
        type="text"
        placeholder={localization.search}
      />
    )
  }
  render() {
    return (
      <div
        className="search-container"
      >
        {this.renderSearchBar()}
        {this.renderFoodList()}
      </div>
    )
  }
}
