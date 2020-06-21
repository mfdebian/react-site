/* Posts imports */
import React, {Component} from 'react';
import AddPost from './AddPost.js'
import PostItem from './PostItem.js'
import uuid from 'uuid';

class Posts extends Component {

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
      <div>
      <AddPost addPost={this.addPost} />
      <br></br>
      {this.state.posts.map((post) =>(
        <PostItem key={post.id} post={post} deletePost={this.deletePost}/>
      ))}
      </div>

    );
  }
}

export default Posts;
