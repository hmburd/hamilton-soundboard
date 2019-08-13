import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import HamiltonAPI from '../api/HamiltonAPI.js'
import { Redirect } from 'react-router'

class AddCommentForm extends Component {
  state = {
    redirect: false,
    name: '',
    comment: ''
  }
  
  handleSubmit(event){
    event.preventDefault()
    const commentObject = {
      commenter_name: event.target.elements[0].value,
      comment_text: event.target.elements[1].value,
    }
    HamiltonAPI.addComment(commentObject)
      .then((response) => { this.setState({ redirect: true, name: '', comment: '' }) })
    alert('Thank you for your comment')
  }

  handleChangeName(event){
    event.preventDefault()
    let commenter_name = event.target.value
    this.setState({ name: commenter_name })
  }

  handleChangeComment(event){
    event.preventDefault()
    let comment_text = event.target.value
    this.setState({ comment: comment_text })
  }

  render() {
    const redirect = this.state.redirect
    if (redirect) {
      this.setState({redirect: false})
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group onChange={this.handleChangeName.bind(this)} dcontrolId="commenter_name">
            <Form.Label>Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group onChange={this.handleChangeComment.bind(this)} controlId="comment_text">
            <Form.Label>Comment</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit Your Comment
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddCommentForm