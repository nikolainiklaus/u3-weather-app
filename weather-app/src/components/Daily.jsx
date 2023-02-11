import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useHistory } from "react-redux";
import Day from "./Day";

import "./Daily.css";

function Daily() {
  const weather = useSelector((state) => state.main.weather);
  let days = weather.list;


  return (
    <Container className="daily-container">
      <div className="city-name">Weather in {weather.city.name}</div>
      <Row>
        {days.slice(0, 6).map((day) => (
          <Col key={day.dt}>
            <Day item={day} />
          </Col>
        ))}
      </Row>
      <Button
        
      >
        Go Back to Home
      </Button>
    </Container>
  );
}

export default Daily;
