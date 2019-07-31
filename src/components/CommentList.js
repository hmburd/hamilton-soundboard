import React, { Component } from 'react'

class CommentList extends Component {
  getComments = () => {
    let comments_display = [] 
    for (let i=0; i<this.props.comments.length; i++){
      comments_display.push(<p>{this.props.comments[i].commenter_name + ': ' + this.props.comments[i].comment_text}</p>)
    }
    return comments_display
  }
  render() {

    return (
      <div>
        {this.getComments()}
      </div>
    )
  }
}

export default CommentList