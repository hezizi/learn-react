import React, { Component } from 'react';

class CommentListItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { username, content } = this.props;
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{username} </span>：
        </div>
        <p>{content}</p>
      </div>
    );
  }
}

export default CommentListItem;