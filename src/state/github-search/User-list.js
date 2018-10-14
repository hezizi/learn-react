import React, { Component } from 'react'

class Userlist extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { userName, userLink } = this.props;
    return (
      <div className="">
        <h3>{userName}</h3>
        <a href={userLink}>{userName}</a>
      </div>
    );
  }
}

export default Userlist