import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comments from './Comments';

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img
            className="avatar"
            src={this.props.post.author.avatar}
            alt={`${this.props.post.author.name} avatar`}
          />
          <div className="details">
            <span>{this.props.post.author.name}</span>
            <span>{this.props.post.date}</span>
          </div>
        </div>
        <p className="post-content">{this.props.post.content}</p>
        <div>
          {this.props.post.comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}
