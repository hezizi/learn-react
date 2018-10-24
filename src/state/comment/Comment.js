import React, { Component } from 'react'
import CommentInput from './Comment-input'
import CommentList from './Comment-list'

class Comment extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValLists: []
    };
    this.del = this.del.bind(this);
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let inputValList = localStorage.getItem('inputValList');
    if (inputValList) {
      inputValList = JSON.parse(inputValList);
    };
    this.setState({ inputValLists: inputValList });
  }

  _saveComments(inputValList) {
    localStorage.setItem('inputValList', JSON.stringify(inputValList));
  }

  handleSubmit = (c) => {
    const { inputValLists } = this.state;
    if (!c) {
      alert('请输入');
    } else {
      if (!c.username) {
        alert('请输入用户名');
      } else if (!c.content) {
        alert('请输入留言内容');
      } else {
        let ValListNew = [...inputValLists, c];
        this.setState({
          inputValLists: ValListNew
        });
        this._saveComments(ValListNew);
      }
    }
  }

  del(inputValListNew) {
    this.setState({
      inputValLists: inputValListNew
    })
  }

  render() {
    const { inputValLists } = this.state;
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit} />
        <CommentList inputValLists={inputValLists} handleDel={this.del}/>
      </div>
    );
  }
}

export default Comment