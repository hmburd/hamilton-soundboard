import React, { Component } from 'react'
import CommentList from '../components/CommentList.js'
import HamiltonAPI from '../api/HamiltonAPI.js'
import AddCommentForm from '../components/AddCommentForm.js'

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

  componentDidUpdate(prevProps, prevState){
    if (this.state.comments !== prevState.comments){
    HamiltonAPI.fetchComments()
      .then((apiResponseJSON) => {
        this.setState({
          comments: apiResponseJSON
        })
      }
    )
    }
  }

  render() {
    return (
      
      <div>
        <h1> Please leave a comment on the Guestbook!</h1>
        <AddCommentForm />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentPage