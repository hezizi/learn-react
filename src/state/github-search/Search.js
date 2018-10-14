import React, { Component } from 'react'
import Searchinput from './Search-input'
import Userlist from './User-list'

import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      responseText: {
        userName: '',
        userLink: ''
      }
    }
  }
  getInputText = (inputText) => {
    let url =  `https://api.github.com/search/users?q=${inputText}`
    axios
      .get(url)
      .then(res => {
        const response = res.data.items[0];
        console.log(response)
        this.setState({
          userName: response.login,
          userLink: response.html_url
        })
      })
  }
  render() {
    const { userName, userLink } = this.state;
    return (
      <div className="">
        <Searchinput getInputText={this.getInputText} />
        <Userlist userName={userName} userLink={userLink} />
      </div>
    );
  }
}

export default Search