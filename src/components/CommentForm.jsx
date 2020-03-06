import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import data from '../data';

export default class CommentForm extends Component {
  state = {
    text: '',
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { personIndex, addComment } = this.props;
    const { text } = this.state;
    addComment(personIndex, text);
  }

  render = () => {
    const { text } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Entrez votre commentaire:</Form.Label>
          <Form.Control
            as="textarea" rows="3"
            onChange={this.handleChange}
            value={text}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={text === ''}>
          Envoyer
        </Button>
      </Form>
    );
  }
}
