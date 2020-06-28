import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: true };
    this.showHideContent = this.showHideContent.bind(this);
  }

  showHideContent() {
    this.setState((state) => ({ isShow: !state.isShow }));
  }

  showHideContentWithoutBind(id) {
    this.setState((state) => ({ isShow: !state.isShow }));
    alert(id);
  }

  //for this kind of method no need to bind the method
  showHideContentWithPublicClassFunc = () => {
    this.setState((state) => ({ isShow: !state.isShow }));
  };

  //for this kind of method no need to bind the method and for parameter you have to make arrow function in html 
  showHideContentWithPublicClassFuncWithParameter = (id) => {
    alert(id);
    this.setState((state) => ({ isShow: !state.isShow }));
    
  };

  render() {
    return (
      <div>
        <button onClick={this.showHideContent}>
          {this.state.isShow ? "Hide" : "Show"}
        </button>
        <button onClick={() => this.showHideContentWithoutBind(10)}>
          ShowHide Without Bind Method
        </button>
        <button onClick={this.showHideContentWithPublicClassFunc}>
          ShowHide With Public class Function
        </button>
        <button onClick={() => this.showHideContentWithPublicClassFuncWithParameter(5)}>
          ShowHide With Public class Function With Parameter
        </button>
        {this.state.isShow && (
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Content;
