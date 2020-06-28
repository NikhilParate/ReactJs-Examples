import React, { Component } from "react";
import "./App.css";
import Student from "./student";
import Counter from "./counter";

const Category = (props) => <h2>Category name: {props.name}</h2>;

class Product extends Component {
  render(props) {
    return (
      <div>
        <p>Product Name : {this.props.prod.name} </p>
        <p>Product Name : {this.props.prod.price} </p>
        <Counter num={10} />
      </div>
    );
    // return <p>Product Name : {this.props.name} </p>;
  }
}

Category.defaultProps = {
  name: "Man",
};

const products = { name: "Mobile", price: "5000" };

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Welcome</h2>
        {/* <Category name='Nikhil' /> */}
        {/* <Product name='laptop' /> */}
        <Category />
        <Product prod={products} />
      </div>
    );
  }
}

// const studentJson = {
//   name: "Nikhil",
//   course: { name: "FrontEnd Developer", duration: "3 Months" },
//   fee: "10000"
// };

// function App() {
//   return (
//     <div className='App'>
//       <h2>Welcome</h2>
//       <Student student={studentJson} />
//     </div>
//   );
// }

// const pageTitle = <span>Welcome to React</span>;
// const clickMe =  () => alert('hello');

// function App() {
//   return (
//     <div className="App">
//      <h1>{pageTitle}</h1>
//      <p>This is a content page.</p>
//      <button onClick={clickMe}>Click me</button>
//     </div>
//   );
// }

export default App;
