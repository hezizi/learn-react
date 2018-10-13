import React, { Component } from 'react';

class CommentListItem extends Component {
  constructor(props) {
    super();
    this.delItem = this.delItem.bind(this);
  }
  delItem() {
    const { del, index } = this.props;
    del(index);
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
        <div className="df flex-1 df-jcfe"><button onClick={this.delItem}>删除</button></div>
      </div>
    );
  }
}

export default CommentListItem;