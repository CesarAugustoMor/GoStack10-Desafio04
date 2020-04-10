import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Post extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="post-comments">
        <div className="divider" />
        <div className="comment">
          <img
            className="avatar"
            src={this.props.comment.author.avatar}
            alt={`${this.props.comment.author.name} avatar`}
          />
          <p>
            <span>{this.props.comment.author.name}</span>
            {this.props.comment.content}
          </p>
        </div>
      </div>
    );
  }
}
