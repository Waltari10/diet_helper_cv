import React, { Component } from 'react'
import IllegalIcon from 'react-icons/lib/fa/times-circle'
import LegalIcon from 'react-icons/lib/fa/check'

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

    let foods = []
    if (this.state.searchValue) {
      foods = this.foodData.filter((food) => {
        let foodLocal = food.ruoka.trim().toLowerCase()

        if (localization.getLanguage() === 'GB') {
          foodLocal = food.food.trim().toLowerCase()
        }

        return foodLocal.includes(this.state.searchValue)
      })
    }

    this.setState({
      foods,
      locale: localization.getLanguage(),
    })
  }
  onChange(event) {
    const value = event.target.value.toLowerCase().trim()

    let foods = []
    if (value) {
      foods = this.foodData.filter((food) => {
        let foodLocal = food.ruoka.trim().toLowerCase()

        if (localization.getLanguage() === 'GB') {
          foodLocal = food.food.trim().toLowerCase()
        }

        return foodLocal.includes(value)
      })
    }
    this.setState({
      foods,
      searchValue: value,
    })
  }
  parseCSV(csvString) {
    const csvRows = csvString.split('\n')
    const keys = csvRows[0].split(',').map(k => k.trim())

    const objArray = csvRows.map((rowText, i) => {
      // Filter out key row
      if (i === 0) return undefined

      const row = rowText.split(',')
      const obj = {}

      for (let k = 0; k < keys.length; k++) {
        obj[keys[k]] = row[k]
      }

      return obj
    })

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
