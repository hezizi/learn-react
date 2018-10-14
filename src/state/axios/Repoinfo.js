import React, { Component } from 'react'
import axios from 'axios'

class Repoinfo extends Component {
  constructor(props) {
    super();
    this.state = {
      repoName: '',
      repoUrl: ''
    }
  }
  componentDidMount() {
    const { searchKey } = this.props;
    let url = `https://api.github.com/search/repositories?sort=stars`;
    // axios
    axios
      .get(url, {
        params: {
          q: searchKey
        }
      })
      .then(res => {
        if (res.status === 200) {
          const data = res.data;
          const result = data.items[0];
          this.setState({
            repoName: result.name,
            repoUrl: result.html_url
          })
        }
      }).catch(err => {
        console.log(err);
      })

    // fetch
    // fetch(url)
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     const res = data.items[0];
    //     this.setState({
    //       repoName: res.name,
    //       repoUrl: res.html_url
    //     })
    //   })
  }
  render() {
    const { repoName, repoUrl } = this.state;
    if (!repoName) {
      return <h2>Loading...</h2>
    } else {
      return (
        <h2>最受欢迎的框架：<a href={repoUrl}>{repoName}</a></h2>
      )
    }
  }
}

export default Repoinfo