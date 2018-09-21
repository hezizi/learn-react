import React, { Component } from 'react';
import LikeButton from './state/LikeButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LikeButton likeText="已赞" unLikeText="赞"/>
      </div>
    );
  }
}

export default App;
