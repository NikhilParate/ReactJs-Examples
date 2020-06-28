import React, { Component } from "react";

function Posts(props) {
  const listItems = props.posts.map((post, index) => (
    <PostItem posts={post} key={post.id} />
  ));

  const listItems2 = props.posts.map((post, index) => (
    <PostItem posts={post} key={post.id} />
  ));

  //One way to loop element and show
  //   const listItems = props.posts.map((post, index) => (
  //     <div key={post.id}>
  //       <h3>{post.title}</h3>
  //       <p>{post.content}</p>
  //     </div>
  //   ));
  
  return (
    <div className='post'>
      {listItems}
      <hr />
      {listItems2}
    </div>
  );
}

function PostItem(props) {
  const post = props.posts;
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

class Blog extends Component {
  render() {
    const postsArr = [
      { id: 1, title: "Blog post 1", content: "Blog post 1 content here...." },
      { id: 2, title: "Blog post 2", content: "Blog post 2 content here...." },
      { id: 3, title: "Blog post 3", content: "Blog post 3 content here...." },
      { id: 4, title: "Blog post 4", content: "Blog post 4 content here...." },
    ];
    return (
      <div>
        <h2>Blog Post</h2>
        <Posts posts={postsArr} />
      </div>
    );
  }
}

export default Blog;
