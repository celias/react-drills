import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    
    this.state = {
      message: ""
    }
  }

  handleChange( value ) {
    this.setState ({ message: value })
  }



  render() {
      return (
      <div className="App">

      <input onChange={ (e) => this.handleChange( e.target.value ) } type="text"/>

 <p>{ this.state.message }</p>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>m a g i c</h2>
        </div>
        
        
      </div>
    );
  }
}


