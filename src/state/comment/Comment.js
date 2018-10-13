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
    this.del = this.del.bind(this);
  }
  // 接受子组件传过来的参数
  handleSubmit(c) {
    const { inputValList } = this.state;
    if (!c) {
      alert('请输入');
    } else {
      if (!c.username) {
        alert('请输入用户名');
      } else if (!c.content) {
        alert('请输入留言内容');
      } else {
        this.setState({
          inputValList: [...inputValList, c]
        })
      }
    }
  }
  del(inputValListNew) {
    console.log(inputValListNew);
    this.setState({
      inputValList: inputValListNew
    })
  }
  render() {
    const { inputValList } = this.state;
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList inputValList={inputValList} handleDel={this.del}/>
      </div>
    );
  }
}

export default Comment