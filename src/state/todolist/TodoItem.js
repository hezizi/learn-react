import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  /*
    删除事件deleteItem()写在子组件中
    通过this.props获取父组件传递过来的值,把delete属性的值赋值给delItem
    delete属性值为一个方法deleteItem()，子组建定义的删除方法
    相当于子组件定义的deleteItem()方法会调用父组件定义的删除方法
  */
  deleteItem() {
    let {delItem, index} = this.props;
    console.log(delItem);
    /*
      deleteItem(index) {
        var newTodos = [].concat(_toConsumableArray(this.state.todos));
        newTodos.splice(index, 1);
        this.setState({
          todos: newTodos
        });
      }
    */
    delItem(index);   // 调用父组件的deleteItem(index)方法
  }
  render() {
    let {content} = this.props;
    console.log(content);
    return (
      <li onClick={this.deleteItem}>{content}</li>
    );
  }
}

export default TodoItem;
