import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super();
    /* 
      在 input 组件中如果使用state，在 handleChange 中通过 setState 来改变状态
      会有一个问题就是第一次在input中输入值时不会传递给父组件 （因为setState不会立刻更新状态）
    */
    this.state = {
      num: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    // this.setState({
    //   num: e.target.value
    // })
    const { showNum } = this.props;
    // const { num } = this.state;
    if(showNum) {
      // showNum(num);
      showNum(e.target.value);
    }
  }
  render() {
    // const { num } = this.state;
    return (
      <div className="">
        <input type='number' onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Input