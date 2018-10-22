import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
 
import Home from './view/Home'
import About from './view/About'
import MyNavLink from './component/MyNavLink'
import './style.css';

class Routerdemo01 extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="">
        <h2>react router demo</h2>
        <div className="list-group">
          <MyNavLink to="/home" className="list-style">Home</MyNavLink>
          <MyNavLink to="/about" className="list-style">About</MyNavLink>
        </div>
        <div className="panel-body">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routerdemo01