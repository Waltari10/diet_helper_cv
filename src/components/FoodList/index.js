import React, { Component } from 'react';
import style from './styles.css'
import Papa from 'papaparse'

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
    const keys = csvRows[0].split(",")

    const objArray = csvRows.map(rowText => {
      const row = rowText.split(',')
      const obj = {}

      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = row[i]
      }

      return obj
    })

    return objArray
  }
  renderFoodItem(food) {
    return (
      <div
        key={food.food}
      >
        <p>
          {food.food}
        </p>
      </div>
    )
  }
  renderFoodList() {
    return this.state.foodData.map(this.renderFoodItem)
  }
  render() {
    return (
      <div>
        {this.renderFoodList()}
      </div>
    );
  }
}

export default FoodList;
