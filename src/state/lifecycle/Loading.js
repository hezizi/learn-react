import React, { Component } from 'react'


/* 
  需求：
    完成 Post 组件，它可以加载、刷新文章内容。
    已有函数 getPostData，它会返回一个 Promise，你可以通过它获取文章的内容。
    在获取数据的时候，Post 组件的 div.post-content 中显示 数据加载中...，完成加载以后直接显示 getPostData 的返回结果。
    页面有个按钮，点击可以重新加载数据
*/

class Loading extends Component {
  constructor(props) {
    super();
    this.state = {
      loadMsg: '数据加载中...'
    };
    this.reload = this.reload.bind(this);
  }
  // promise
  getPostData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('加载已完成');
      }, 1000)
    })
  }

  // 
  componentWillMount () {
    this.getPostData().then(res => {
      this.setState({
        loadMsg: res
      })
    })
  }

  reload() {
    this.setState({
      loadMsg: '数据加载中...'
    })
    this.getPostData().then(res => {
      this.setState({
        loadMsg: res
      })
    })
  }
  
  render() {
    const { loadMsg } = this.state;
    return (
      <div className="">
        <div className='post-content'>{loadMsg}</div>
        <button onClick={this.reload}>刷新</button>
      </div>
    );
  }
}

export default Loading