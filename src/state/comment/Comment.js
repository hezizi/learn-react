import React, { Component } from 'react'
import CommentInput from './Comment-input'
import CommentList from './Comment-list'

class Comment extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValList: []
    };
    this.del = this.del.bind(this);
  }

  _saveComments(inputValList) {
    localStorage.setItem('inputValList', JSON.stringify(inputValList));
  }

  _loadComments() {
    let inputValList = localStorage.getItem('inputValList');
    if (inputValList) {
      inputValList = JSON.parse(inputValList);
    };
    this.setState({ inputValList });
  }

  componentWillMount() {
    this._loadComments();
  }

  handleSubmit = (c) => {
    const { inputValList } = this.state;
    if (!c) {
      alert('请输入');
    } else {
      if (!c.username) {
        alert('请输入用户名');
      } else if (!c.content) {
        alert('请输入留言内容');
      } else {
        let ValListNew = [...inputValList, c]
        this.setState({
          inputValList: ValListNew
        });
        this._saveComments(ValListNew);
      }
    }
  }

  del(inputValListNew) {
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