import React, { Component } from 'react'
import CommentList from '../components/CommentList.js'
import HamiltonAPI from '../api/HamiltonAPI.js'

class CommentPage extends Component {
  state = {
    comments: []
  }

  componentDidMount(){
    HamiltonAPI.fetchComments()
      .then((apiResponseJSON) => {
        this.setState({
          comments: apiResponseJSON
        })
      }
    )
  }

  render() {
    console.log(this.state.comments)
    return (
      
      <div>
        <h1> All Comments </h1>
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentPage