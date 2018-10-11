import React, { Component } from 'react'
import CommentInput from './Comment-input'
import CommentList from './Comment-list'

class Comment extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // 接受子组件传过来的参数
  handleSubmit(c) {
    const { inputValList } = this.state;
    this.setState({
      inputValList: [...inputValList, c]
    })
  }
  render() {
    const { inputValList } = this.state;
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList inputValList={inputValList} />
      </div>
    );
  }
}

export default Comment