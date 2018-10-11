import React, { Component } from 'react'

class CommentInput extends Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      username: '',
      content: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  handleChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }
  handleClick() {
    // 接受到父组件传过来的 handleSubmit 方法
    if (this.props.onSubmit) {
      const { onSubmit } = this.props;
      const { username, content } = this.state;
      // 相当于调用父组件 handleSubmit 方法，并把子组件中的值（username， content）传给父组件
      // 父组件的 handleSubmit(c) 中使用参数 c 进行接受
      // 这样就实现子组件的值传递给父组件
      onSubmit({ username, content });
    }
    this.setState({ content: '' });
  }
  render() {
    const { username, content } = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input type="text" placeholder="请输入用户名" value={username} onChange={this.handleChangeUsername} />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={content} onChange={this.handleChangeContent} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleClick}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput