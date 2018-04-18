'use strict'

import React, { Component } from 'react';
import style from './styles.css'
import legalIcon from './ok-icon.png'
import illegalIcon from './cross-icon.png'

class FoodList extends Component {
  state = {
    foods: []
  }
  foodData = []
  constructor(props) {
    super(props)
    fetch('./food_data.csv')
    .then(response => response.text())
    .then(csv => {
      this.foodData = this.parseCSV(csv)
    })
  }
  parseCSV(csv) {
    const csvRows = csv.split('\n')
    let keys = csvRows[0].split(",").map(k => k.trim())

    let objArray = csvRows.map((rowText, i) => {

      // Filter out key row
      if (i === 0) return undefined

      const row = rowText.split(',')
      const obj = {}

      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = row[i]
      }

      return obj
    })

    objArray.shift()

    return objArray
  }
  onChange(event) {

    const value = event.target.value.toLowerCase()

    this.setState({
      foods: this.foodData.filter(food => food.food.toLowerCase().includes(value))
    })
  }
  renderFoodItem(food) {

    return (
      <div
        className="item-row"
        key={food.food}
      >
        <p>
          {food.food}
        </p>
        <img 
          className='icon-row'
          src={food.legal.toLowerCase().trim() === 'legal' ? legalIcon : illegalIcon}
        />
      </div>
    )
  }
  renderFoodList() {
    return this.state.foods.map(this.renderFoodItem)
  }
  renderSearchBar() {
    return (
      <input
        onChange = {
          this.onChange.bind(this)
        }
        className="search-bar"
        type="text" 
        placeholder="Search.."
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
    );
  }
}

export default FoodList;
