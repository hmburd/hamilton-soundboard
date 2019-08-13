import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import HamiltonAPI from '../api/HamiltonAPI.js'
import { Redirect } from 'react-router'

class AddCommentForm extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault()
    const commentObject = {
      commenter_name: event.target.elements[0].value,
      comment_text: event.target.elements[1].value,
    }
    console.log(commentObject)
    HamiltonAPI.addComment(commentObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state.redirect
    if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group dcontrolId="commenter_name">
            <Form.Label>Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="comment_text">
            <Form.Label>Comment</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddCommentForm