import React, { Component } from 'react'

class CommentList extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.comments)}
      </div>
    )
  }
}

export default CommentList