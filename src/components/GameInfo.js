import React from "react";
import { Card } from "react-bootstrap";

export default function GameInfo(props) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{props.item._id.toString()}</Card.Header>
    <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
    </Card.Body>
    </Card>
  );
}