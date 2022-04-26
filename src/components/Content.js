import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Content extends Component {
  render() {
    return (
        <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item><br/>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item><br/>
        <ListGroup.Item variant="success">Success</ListGroup.Item><br/>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item><br/>
        <ListGroup.Item variant="warning">Warning</ListGroup.Item><br/>
        <ListGroup.Item variant="info">Info</ListGroup.Item><br/>
        <ListGroup.Item variant="light">Light</ListGroup.Item><br/>
        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      </ListGroup>
    )
  }
}
