import React, { Component } from 'react'
import { getWordPercentageMatch } from '../../helpers'


import FoodItem from './FoodItem'
import './styles.css'
import localization from '../../Localization'
import json from './foodData.json'

export default class FoodList extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.renderFoodItem = this.renderFoodItem.bind(this)

    this.state = {
      foods: [],
      locale: localization.getLanguage(),
    }
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

    const foodData = json[localization.getLanguage().toLowerCase()]

    const foodsWithMatchPercentage = Object.keys(foodData).map((key) => {
      const matchPercentage = getWordPercentageMatch(key.toLowerCase(), searchValue.toLowerCase())

      return Object.assign({}, foodData[key], { matchPercentage })
    })

    const filteredFoods = foodsWithMatchPercentage.filter(food => food.matchPercentage > 10)

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
  renderFoodItem(food) {
    return <FoodItem key={food.name} food={food} />
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
