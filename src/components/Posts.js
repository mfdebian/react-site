/* Posts imports */
import React, {Component} from 'react';
import PostItem from './PostItem.js'
import PropTypes from 'prop-types';

class Posts extends Component {
  render() {
    return this.props.posts.map((post) =>(
      <PostItem key={post.id} post={post} deletePost={this.props.deletePost}/>
    ));
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts;
