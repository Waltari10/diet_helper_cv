import React, { Component } from 'react'
import { capitalizeFirstLetter, getWordPercentageMatch } from '../../helpers'


import FoodItem from './FoodItem'
import './styles.css'
import localization from '../../Localization'
import csv from './foodData'

export default class FoodList extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.renderFoodItem = this.renderFoodItem.bind(this)

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

    const foodsWithMatchPercentage = this.foodData.map((food) => {
      const foodLocal = localization.getLanguage() === 'GB' ? food.food : food.ruoka

      const matchPercentage = getWordPercentageMatch(foodLocal.toLowerCase(), searchValue.toLowerCase())

      return Object.assign({}, food, { matchPercentage })
      
    })

    const filteredFoods = foodsWithMatchPercentage.filter(food => food.matchPercentage > 40)

    const sortedFoods = filteredFoods.sort((a, b) => b.matchPercentage - a.matchPercentage)

    if (sortedFoods.length > 20) {
      return sortedFoods.slice(0, 20)
    }

    return sortedFoods
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
        obj[keys[k].toLowerCase()] = capitalizeFirstLetter(row[k])
      }

      return obj
    })

    // remove undefined
    objArray.shift()

    return objArray
  }
  renderFoodItem(food) {
    return <FoodItem key={food.food} food={food} />
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
