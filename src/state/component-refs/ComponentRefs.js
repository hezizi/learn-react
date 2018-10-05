import React, { Component } from 'react';

class ComponentRefs extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.showInputVal = this.showInputVal.bind(this);
  }
  showInputVal() {
    // console.log(this);
    // const inputVal = this.refs.content.value;
    console.log(this);
    console.log(this.inputVal);
  }
  // 失去焦点事件
  handleBlur(event) {
    console.log(event.target);
  }
  render() {
    return (
      <div className="">
        <input type="text" ref={inputVal => this.inputVal = inputVal}/>
        <button onClick={this.showInputVal}>提示输出</button>
        <input type="text" placeholder="失去焦点事件" onBlur={this.handleBlur}/>
      </div>
    );
  }
}

export default ComponentRefs;
