import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      foods: [
        "lemons",
        "apples",
        "cheese",
        "burrito",
        "sushi",
        "eggs",
        "pho",
        "pizza",
        "strawberries",
        "avocados",
        "buckwheat noodles",
        "wonder bread",
        "Soylent",
        "almonds",
        "goat cheese"
      ]
    };
  this.handleChange = this.handleChange.bind(this);
}
   
handleChange(val) {
  this.setState({ userInput: val })

}







  

  render() {

    const foodDisplay = this.state.foods.map(val => {
      if (val.startsWith(this.state.userInput)) {
        return (
          <h2> { val } </h2>
        )
      }
    })




    return (
        <div className = "App" >
          <input onChange= { e => this.handleChange(e.target.value) }></input>
          { foodDisplay }
          </div>
    )
  }
}
