import React, { Component } from 'react'

class Searchinput extends Component {
  constructor(props) {
    super();
    this.state = {
      inputText: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  handleSearch = () => {
    const { inputText } = this.state;
    const { getInputText } = this.props;
    getInputText(inputText);
  }
  render() {
    return (
      <div className="">
        <input type="text" placeholder="请输入用户名" onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>搜索</button>
      </div>
    );
  }
}

export default Searchinput