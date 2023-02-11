import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

function Day({ item }) {

  
  return (
    <Col xs={12} md={6} lg={3} className="my-3">
      <Card bg="primary" text="white" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "2rem" }}>
            {Math.round(item.main.temp - 273.15)}°C
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.5rem" }}>
            {format(new Date(item.dt_txt), "MMM dd, yyyy hh:mm a")}
          </Card.Subtitle>
          <Card.Text style={{ fontSize: "1.5rem" }}>
            {item.weather[0].description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Day;
