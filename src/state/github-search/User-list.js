import React, { Component } from 'react'

import axios from 'axios'

class Userlist extends Component {
  constructor(props) {
    super();
    this.state = {
      responseText: []
    }
  }
  componentWillMount() {
    const { inputText } = this.props;
    console.log(inputText)
    let url =  `https://api.github.com/search/users?q=${inputText}`;
    axios
      .get(url)
      .then(res => {
        const response = res.data.items;
        this.setState({
          responseText: response
        })
      })
  }
  render() {
    const { responseText } = this.state;
    console.log(responseText)
    return (
      <h3>111</h3>
    )
  }
}

export default Userlist