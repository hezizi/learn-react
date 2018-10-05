import React, { Component } from 'react';
// import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputVal: ''
    }
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  addItem() {
    this.setState({
      todos: [...this.state.todos, this.state.inputVal],
      inputVal: ''
    })
  }
  deleteItem(index) {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    })
  }
  getTodoItem() {
    const {todos} = this.state;
    return (
      todos.map((item, index) => {
        return (
          <TodoItem
            delItem={this.deleteItem}
            key={index}
            content={item}
            index={index}
          />
        )
      })
    )
  }
  render() {
    return (
      <div>
        <h1>simple Todo List</h1>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
        <button onClick={this.addItem}>add</button>
        <ul>{this.getTodoItem()}</ul>
      </div>
    );
  }
}

export default TodoList;
