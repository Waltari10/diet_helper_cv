import React, { Component } from 'react';
import style from './styles.css'
import food_data from './food_data.csv'
console.log(food_data)

class FoodList extends Component {

  render() {
    return (
      <div>
        {food_data}
      </div>
    );
  }
}

export default FoodList;
