import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const WeatherForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm="2">Tempature</Form.Label>
          <Col sm="7">
            <Form.Control type="number" placeholder="20" />
          </Col>
          <Col sm="3">
            <Form.Control as="select">
              <option>Celsius</option>
              <option>Fahrenheit</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm="2">Weather Type</Form.Label>
          <Col sm="10">
            <Form.Control as="select">
              <option>Snow</option>
              <option>Storm</option>
              <option>Rain</option>
              <option>Wind</option>
              <option>Sunny</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
      <Button variant="primary" type="submit">
        Preview
      </Button>
    </Form>
  );
}

export default WeatherForm;
