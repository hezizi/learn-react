import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: ['撸码', '吃饭', '睡觉'],
      inputVal: ''
    }
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /*
    AddItem组件需要改变TodoList组件的状态
    子组件不能直接改变父组件的状态
    状态在那个组件，更新状态的行为就定义在那个组件
  */
  addItem() {
    const {todos} = this.props;
    console.log(todos);
    this.setState({
      todos: [...todos, this.state.inputVal],
      inputVal: '',
    })
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {
    return (
      <div className="">
        <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
        <button onClick={this.addItem}>add</button>
      </div>
    )
  }
}

export default AddTodo;
