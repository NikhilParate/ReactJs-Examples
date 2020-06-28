import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { productId: "", qty: 0, isCart: true };
  }

  addToCart = (pid) =>
    this.setState((state) => ({ productId: pid, qty: state.qty + 1 }));

  removeCart = () => this.setState({ isCart: false });

  render() {
    return (
      <div>
        <button onClick={() => this.addToCart(1)}>Add to Cart</button>
        <button onClick={() => this.addToCart(2)}>Add to Cart</button>
        <button onClick={() => this.addToCart(3)}>Add to Cart</button>
        {this.state.isCart && (
          <Cart productId={this.state.productId} qty={this.state.qty} />
        )}
        {!this.state.isCart && <h2>Cart has been removed.</h2>}
        <button onClick={this.removeCart}>Reove Cart</button>
      </div>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { qty: this.props.qty };
  }

  static getDerrivedStateFromProps(props, state) {
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.qty !== nextProps.qty) {
      console.log("Should compoenent updated !!");
      return true;
    }
    return false;
  }

  //   updateQty = () => this.setState((state) => ({ qty: state.qty + 1 }));

  //This method will use if you want to call API after the component loading etc.
  componentDidMount() {
    console.log("execute after component render");
  }

  //this method maintain the previous state
  componentDidUpdate(prevProps, prevState) {
    if (this.props.productId !== prevProps.productId) {
      console.log("Component Updated");
    }
  }

  componentWillUnmount() {
    console.log("Component Desroyed !!");
  }

  render() {
    return (
      <div>
        <h3>Cart Items : {this.state.qty}</h3>
      </div>
    );
  }
}

export default Product;
