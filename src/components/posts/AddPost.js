import React, { Component } from 'react';

class AddPost extends Component {

  state = {
    title: '',
    body: '',
  }

  onChange = (event) => {
    this.setState(
      {
        // this will update the state corresponding to each input name
        [event.target.name]: event.target.value,
      }
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="body"
          placeholder="Add body"
          value={this.state.body}
          onChange={this.onChange}
        />
        <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }

}

export default AddPost;
