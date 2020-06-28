import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //this.state = { count: 1 };
    this.state = { count: this.props.num };
    this.stateHandling = this.stateHandling.bind(this);
  }

  //dont use like this : It does not maintain the previous state or previous state value
  //   updateCount = () => this.setState({ count: this.state.count + 1 });

  //state parameter here maintain the previous state value 
  updateCount = () =>
    this.setState((state)=>(
        { count: state.count + 1 }
    ))

  stateHandling() {
    this.updateCount();
    this.updateCount();
    this.updateCount();
  }

  render() {
    return (
      <div className='counter'>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.updateCount}>Click Me</button>
        <button onClick={this.stateHandling}>Click Me - Multiple Count</button>
      </div>
    );
  }
}

export default Counter;
