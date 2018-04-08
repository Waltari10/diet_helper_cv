import React, { Component } from 'react';
import '../App.css';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import FoodList from './FoodList/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FoodList />
        <Footer />
      </div>
    );
  }
}

export default App;
