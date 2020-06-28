import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      email: "",
      city: "",
      message: "",
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
    //console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            Name:{" "}
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Email:{" "}
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            City:
            <select
              name='city'
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option value=''>Select City....</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Pune'>Pune</option>
              <option value='Nagpur'>Nagpur</option>
            </select>
          </div>
          <div>
            Message:
            <textarea
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
