import { SET_LAT, SET_LONG, SET_WEATHER } from "../actions";
import { initialState } from "../store";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        main: {
          ...state.main,
          weather: action.payload,
        },
      };

    case SET_LONG:
      return {
        ...state,
        main: {
          ...state.main,
          long: action.payload,
        },
      };

    case SET_LAT:
      return {
        ...state,
        main: {
          ...state.main,
          lat: action.payload,
        },
      };
    default:
      return state;
  }
};
