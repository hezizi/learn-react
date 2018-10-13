import React, { Component } from 'react';
import Loading from './Loading'

/* 
  执行顺序：
    componentWillUnmount() ==> 组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做
*/
class ShowComponent extends Component {
  render() {
    return (
      <h2>isShow</h2>
    )
  }
  // 组件对应的 DOM 元素从页面中删除之前调用
  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }
}


/* 
  执行顺序：
    constructor()   ==> 初始化 state.date
    componentWillMount() ==> 一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行
    render()
    componentDidMount() 
*/
class Lifecycle extends Component {
  constructor() {
    console.log('constructor()');
    super();
    this.state = {
      date: new Date(),
      isShow: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentWillMount() {
    console.log('componentWillMount()');
  }
  componentDidMount() {
    console.log('componentDidMount()');
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  render() {
    console.log('render()');
    let { date, isShow } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleClick}>显示或者隐藏标题</button>
        {isShow ? <ShowComponent /> : null}

        <h4>-----加载、刷新数据----</h4>
        <Loading />
     </div>
    )
  }
}

export default Lifecycle;