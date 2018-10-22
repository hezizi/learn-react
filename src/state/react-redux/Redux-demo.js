import React, { Component } from 'react'

class Reduxdemo extends Component {
  constructor(props) {
    super();
    this.state = {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  componentWillMount() {
    this.dispatch({
      type: 'add',
      text: '增加一',
      color: 'lightblue'
    })
  }
  dispatch(action) {
    let { title } = this.state;
    console.log(action)
    switch(action.type) {
      case 'add': 
        title.text = action.text;
        title.color = action.color;
        break;
    }
  }
  render() {
    let { title, content } = this.state;
    console.log(title, content)
    return (
      <div className="App">
        <h2 style={{color: title.color}}>{title.text}</h2>
        <h2 style={{color: content.color}}>{content.text}</h2>
      </div>
    );
  }
}

export default Reduxdemo