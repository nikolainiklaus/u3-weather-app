import React, { useEffect, useState } from "react";
import { Link } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Card, Container, Jumbotron, Row, Col } from "react-bootstrap";

import InputForm from "./InputForm";
import "./Home.css";

function Home() {
  const weather = useSelector((state) => state.main.weather);
  const long = useSelector((state) => state.main.long);

  return (
    <>
      <Jumbotron className="text-center bg-primary text-white">
        <h1 className="display-4">What's the weather like?</h1>
      </Jumbotron>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={6}>
            <InputForm />
          </Col>
        </Row>
        {long ? (
          <Row className="justify-content-center mt-5">
            <Col xs={12} sm={8} md={6} lg={4}>
              <div className="mb-3">Weather right now:</div>
              <Card className="mx-auto">
                <Card.Body>
                  <Card.Title className="text-center">
                    {weather.city.name}
                  </Card.Title>
                  <Card.Title className="text-center">
                    {Math.round((weather.list[0].main.temp - 273.15) * 1) / 1}{" "}
                    °C
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Link to="/daily" className="btn btn-primary btn-block">
                    Daily
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center mt-5">
            <Col xs={12}>
              <h2 className="text-center">Enter a city to see the weather</h2>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default Home;
