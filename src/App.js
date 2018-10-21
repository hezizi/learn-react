import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import LikeButton from './state/LikeButton'
// import ComponentProps from './state/component-props/ComponentProps'
// import ComponentRefs from './state/component-refs/ComponentRefs'
// import TodoList from './state/todolist/TodoList'
import Lifecycle from './state/lifecycle/Lifecycle'
import Comment from './state/comment/Comment'
import PercentageApp from './state/Percentage-converter/PercentageApp'
import Repoinfo from './state/axios/Repoinfo'
import Search from './state/github-search/Search'
import Routerdemo from './state/react-router/Router-demo01'

class App extends Component {
  render() {
    /*
      在父组件中通过以属性的形式进行传值，在子组件的constructor中通过参数来接受父组件的传值
    */
    // const person = {
    //   name: 'yucihent',
    //   age: '23'
    // }
    // 指定属性值的类型必要性
    // {...person} => name={person.name} age={person.age}
    return (
      <div className="App">
        {/* <LikeButton likeText="已赞" unLikeText="赞"/>
        <ComponentProps {...person}/>
        <ComponentRefs />

        ---------------------------------------------

        <TodoList />

        --------------------------------------------- */}
        
        <h1>-------------react生命周期-------------</h1>

        <Lifecycle />
        
        <h1>-------------react留言本-----------</h1>

        <Comment />

        <h1>---------react百分比换算器----------</h1>

        <PercentageApp />

        <h1>---------react axios----------</h1>

        <Repoinfo searchKey='r'/>

        <h1>---------react axios搜索github用户----------</h1>

        <Search />

        <h1>---------react router 初体验----------</h1>

        <Routerdemo />
      </div>
    );
  }
}

// App.PropTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// }

export default App
