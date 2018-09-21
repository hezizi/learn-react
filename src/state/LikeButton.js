import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super();
    console.log(props);
    // console.log(this);    // LikeButton实例
    this.state = {
      isLike: true
    }
  }
  clickBtn() {
    // console.log(this);    // LikeButton实例

    // React.js 并不会马上修改 state。而是把这个对象放到一个更新队列里面，
    // 稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新
    this.setState({
      isLike: !this.state.isLike,
    })
    this.setState(prevState => {
      return {
        count: 0
      }
    })
    this.setState(prevState => {
      return {
        count: prevState.count += 1
      }
    })
  }
  render() {
    const likeText = this.props.likeText || '取消';
    const unLikeText = this.props.unLikeText || '点赞';
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={this.clickBtn.bind(this)}>
          {this.state.isLike ? likeText : unLikeText}
        </button>
        {this.state.count}
      </div>
    );
  }
}

export default LikeButton;
