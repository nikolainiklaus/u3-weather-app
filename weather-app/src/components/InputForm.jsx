import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  setLatAction,
  setLongAction,
  setWeatherAction,
} from "../redux/actions";

function InputForm() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  // const weather = useSelector((state) => state.main.weather);
  const long = useSelector((state) => state.main.long);
  const lat = useSelector((state) => state.main.lat);
  const weather = useSelector((state) => state.main.weather);

  const getCity = async (city) => {
    try {
      console.log("calling get city function");
      let res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=23849476568cb1a8a8f9382edd65f45a`
      );
      let data = await res.json();
      if (res.ok) {
        let lon = data[0].lon;
        let lat = data[0].lat;
        dispatch(setLongAction(lon));
        dispatch(setLatAction(lat));
        console.log(lon, lat);
        getWeather(lat, lon);
      }
    } catch (error) {}
  };

  const getWeather = (lat, lon) => {
    console.log("calling get weather function");
    console.log(lat);
    console.log(long);
    fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=23849476568cb1a8a8f9382edd65f45a`
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=23849476568cb1a8a8f9382edd65f45a`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setWeatherAction(data));
        console.log(data);
        console.log(weather);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(city);
    getCity(city);
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  return (
    <Container className="my-5" style={{ maxWidth: "700px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h3>Check the weather in your city</h3>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            Type a city in order to receive weather data
          </Form.Text>
        </Form.Group>
        <Button onClick={handleClick} variant="primary" type="submit">
          Get Weather Data
        </Button>
      </Form>
    </Container>
  );
}

export default InputForm;
