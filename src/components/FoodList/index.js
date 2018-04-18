'use strict'

import React, { Component } from 'react';
import style from './styles.css'
import legalIcon from './ok-icon.png'
import illegalIcon from './cross-icon.png'

class FoodList extends Component {
  state = {
    foodData: []
  }
  constructor(props) {
    super(props)
    fetch('./food_data.csv')
    .then(response => response.text())
    .then(csv => {
      var foodData = this.parseCSV(csv)
      this.setState({
        foodData,
      })

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
  renderFoodItem(food) {

    console.log(food.legal)
    console.log(food.legal.trim().toLowerCase() === 'legal')

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
    return this.state.foodData.map(this.renderFoodItem)
  }
  renderSearchBar() {
    return (
      <input 
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
