import React, { Component } from 'react'
import CommentListItem from './Comment-list-item'

class CommentList extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { inputValList } = this.props;
    return (
      inputValList.map((item, index) => {
        console.log(item)
        return (
          <CommentListItem 
            key={index} 
            username={item.username} 
            content={item.content}
          />
        )
      })
    );
  }
}

export default CommentList;