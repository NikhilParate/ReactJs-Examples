import React, { Component } from "react";
import "./App.css";
import ContactForm from "./ContactForm";
// import Content from "./Content";
// import Comment from "./Comment";
// import Blog from './Blog';

class App extends Component {
  state = {
    fields: {},
  };

  //component communication example
  onSubmit = (fields) => {
    this.setState({ fields: fields });
  };

  render() {
    return (
      <div className='App'>
        <h2>React Tutorial</h2>
        <ContactForm onSubmit={this.onSubmit} />
        <h3>{JSON.stringify(this.state.fields)}</h3>
        {/* <Blog /> */}
        {/* <Comment /> */}
        {/* <Content /> */}
      </div>
    );
  }
}

export default App;
