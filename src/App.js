import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LikeButton from './state/LikeButton';
import ComponentProps from './state/component-props/ComponentProps';
import ComponentRefs from './state/component-refs/ComponentRefs';

class App extends Component {
  render() {
    /*
      在父组件中通过以属性的形式进行传值，在子组件的constructor中通过参数来接受父组件的传值
    */
    const person = {
      name: 'yucihent',
      age: '23'
    }
    // 指定属性值的类型必要性
    // {...person} => name={person.name} age={person.age}
    return (
      <div className="App">
        <LikeButton likeText="已赞" unLikeText="赞"/>
        <ComponentProps {...person}/>
        <ComponentRefs />
      </div>
    );
  }
}

// App.PropTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// }

export default App;
