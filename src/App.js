import React, { Component } from 'react';
import './App.css';
import RoutingExample from './RoutingExample';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1 style={{textAlign:'center'}}>React Tutorial</h1>
      	<RoutingExample />
      </div>
    );
  }
}

export default App;