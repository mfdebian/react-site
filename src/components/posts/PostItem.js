/* PostItem imports */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import '../../assets/css/PostItem.css';

class PostItem extends Component {
  render() {
    // spread bind this.props.todo's properties to consts
    const {id, title, body, date_of_publication} = this.props.post;
    return (
      <div className="PostItem">
        <button onClick={this.props.deletePost.bind(this, id)}>
          X
        </button>
        <h1 className="PostItem-header">{title}</h1>
        <h3>{body}</h3>
        <Moment>{date_of_publication}</Moment>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostItem;
