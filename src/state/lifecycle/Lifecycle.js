import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    console.log('render()');
    let {date} = this.state;
    return (
      <div>
       <h1>Hello, world!</h1>
       <h2>It is {date.toLocaleTimeString()}.</h2>
     </div>
    )
  }
}

export default Lifecycle;
