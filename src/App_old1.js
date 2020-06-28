import React, { Component } from "react";
import "./App.css";
import Product from './Product';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>React Tutorial</h2>
        <Product/>
      </div>
    );
  }
}


export default App;
