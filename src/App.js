/* App imports */
import React, {Component} from 'react';
import uuid from 'uuid';
import './assets/css/App.css';

/* Other components imports */
import Posts from './components/Posts.js';
import AddPost from './components/AddPost.js';

class App extends Component {

  state = {
    posts: [
      {
        id: uuid.v4(),
        title: "Music",
        body: "Music post",
        date_of_publication: Date.now()
      },
      {
        id: uuid.v4(),
        title: "Math",
        body: "Math post",
        date_of_publication: Date.now()
      },
      {
        id: uuid.v4(),
        title: "Movies",
        body: "Movies post",
        date_of_publication: Date.now()
      },
    ]
  }

  // delete's a post from the posts array
  deletePost = (id) => {
    let newPosts = this.state.posts.filter(post => {
      return post.id !== id;
    });

    this.setState(
      {
        posts: newPosts
      }
    );

  }

  // add a post to the posts array
  addPost = (post) => {
    post.id = uuid.v4();
    post.date_of_publication = Date.now();

    let oldPosts = this.state.posts
    let newPosts = oldPosts;
    newPosts.push(post);

    this.setState(
      {
        posts: newPosts
      }
    );

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi.
          </p>
        </header>
        <br></br>
        <AddPost addPost={this.addPost} />
        <p>
          hello
        </p>
        <br></br>
        <Posts posts={this.state.posts} deletePost={this.deletePost}/>
      </div>
    );
  }
}

export default App;
