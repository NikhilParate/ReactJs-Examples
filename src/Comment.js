import React, { Component } from "react";

function Message(props) {
    if(!props.message){
        return null;
    }
  return (
    <div>
      <h3>Comment added ...</h3>
    </div>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { message: false };
    this.messagedAdded = this.messagedAdded.bind(this);
  }

  messagedAdded(e){
      e.preventDefault();
      this.setState({ message: true });
  }

  render() {
    return (
      <div>
        <Message message={this.state.message} />
        <h2>Add a comment ...</h2>
        <form>
          <textarea
            name='comment'
            placeholder='Comment'
            cols='40'
            rows='5'
          ></textarea>
          <div>
            <button onClick={this.messagedAdded}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.loginButtonClick = this.loginButtonClick.bind(this);
    this.logoutButtonClick = this.logoutButtonClick.bind(this);
  }

  loginButtonClick() {
    this.setState({ isLoggedIn: true });
  }

  logoutButtonClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let commentForm;
    if (isLoggedIn) {
      commentForm = <CommentForm />;
    }

    const comments = ["comment message 1", "comment message 2"];

    return (
      <div>
        {isLoggedIn ? (
          <button onClick={this.logoutButtonClick}>Logout</button>
        ) : (
          <button onClick={this.loginButtonClick}>Login</button>
        )}
        {commentForm}
        {comments.length > 0 && (
          <div>
            <h2>Comments</h2>
            <p>{comments[0]}</p>
            <p>{comments[1]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Comment;
