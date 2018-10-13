import React, { Component } from 'react'

class PercentageApp extends Component {
  constructor(props) {
    super();
  }
  static defaultProps = {
    showNum: 0.3
  }
  render() {
    const { showNum } = this.props;
    return (
      <div className="">
        <p>{showNum > 0 && showNum < 1 ? `${(showNum * 100).toFixed(2)}%` : showNum}</p>
      </div>
    );
  }
}

export default PercentageApp