import React, { Component } from 'react'
import Searchinput from './Search-input'
import Userlist from './User-list'

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      inputText: ''
    }
  }
  getInputText = (inputText) => {
    this.setState({
      inputText
    })
  }
  render() {
    const { inputText } = this.state;
    return (
      <div className="">
        <Searchinput getInputText={this.getInputText} />
        <Userlist inputText={inputText} />
      </div>
    );
  }
}

export default Search