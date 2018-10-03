import React, { Component } from 'react';

class ComponentProps extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return (
      <div className="">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
        </ul>
      </div>
    );
  }
}

export default ComponentProps;
