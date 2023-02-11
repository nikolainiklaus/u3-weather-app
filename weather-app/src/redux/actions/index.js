export const SET_WEATHER = "SET_WEATHER";
export const SET_LONG = "SET_LONG";
export const SET_LAT = "SET_LAT";

export const setWeatherAction = (weather) => ({
  type: SET_WEATHER,
  payload: weather,
});

export const setLongAction = (long) => ({
  type: SET_LONG,
  payload: long,
});

export const setLatAction = (lat) => ({
  type: SET_LAT,
  payload: lat,
});
