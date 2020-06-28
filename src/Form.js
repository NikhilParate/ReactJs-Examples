import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class ContactForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={6}>
              <Form>
                  <Form.Group controlId="FormGroupName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="name" placeholer="Name"></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="FormGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" name="name" placeholer="Email"></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="FormGroupCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control as="select" name="city">
                          <option value="New Delhi">New Delhi</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Pune">Pune</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="FormGroupMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" name="Message"></Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Button variant="success">Send Message</Button>
                  </Form.Group>
              </Form>
          </Col>
          <Col sm={6}>col-sm-6</Col>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;
