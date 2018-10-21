import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class MyNavLink extends Component {
  constructor(props) {
    super();
  }
  render() {
    return <NavLink {...this.props} activeClassName="active"/>
  }
}

export default MyNavLink