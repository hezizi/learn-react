import React, { Component } from 'react'
import Input from './Input'
import PercentageShower from './PercentageShower'

class PercentageApp extends Component {
  /* 
    此做法是把状态放置在 input 组件上，通过子组件传值给父组件
  */
  constructor(props) {
    super();
    this.state = {
      showNum: ''
    }
    this.handleShowNum = this.handleShowNum.bind(this);
  }
  handleShowNum(num) {
    this.setState({
      showNum: num
    })
  }
  render() {
    const { showNum } = this.state;
    return (
      <div className="">
        <Input showNum={this.handleShowNum}/>
        <PercentageShower showNum={showNum}/>
      </div>
    );
  }
}

export default PercentageApp