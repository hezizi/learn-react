import React, { Component } from 'react'
import CommentListItem from './Comment-list-item'

class CommentList extends Component {
  constructor(props) {
    super();
    this.delItem = this.delItem.bind(this);
  }
  delItem(index) {
    const { inputValList, handleDel } = this.props;
    const inputValListNew = [...inputValList];
    inputValListNew.splice(index, 1);
    handleDel(inputValListNew);
  }
  render() {
    const { inputValList } = this.props;
    return (
      inputValList.map((item, index) => {
        return (
          <CommentListItem 
            del={this.delItem}
            key={index} 
            index={index}
            username={item.username} 
            content={item.content}
          />
        )
      })
    );
  }
}

export default CommentList;