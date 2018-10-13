import React, { Component } from 'react';

class CommentListItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    // 接收从父组件传递过来的值
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