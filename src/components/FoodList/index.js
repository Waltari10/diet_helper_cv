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

    let searchValue = ''
    if (window.location.hash) {
      searchValue = window.location.hash.substring(1)
    }

    this.state = {
      foods: this.getVisibleFoods(searchValue),
      locale: localization.getLanguage(),
      searchValue,
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

    const foods = Object.keys(foodData)
    .map((key) => {
      const matchPercentage = getWordPercentageMatch(key.toLowerCase(), searchValue)

      if (matchPercentage > 10) {
        return Object.assign({ matchPercentage }, foodData[key])
      }

      return null
    })
    .filter(food => !!food)
    .sort((a, b) => b.matchPercentage - a.matchPercentage)

    if (foods.length > 20) {
      return foods.slice(0, 20)
    }

    return foods
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
        value={this.state.searchValue}
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
