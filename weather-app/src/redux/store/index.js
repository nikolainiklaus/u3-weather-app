import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "../reducer/main";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const initialState = {
  main: {
    weather: null,
    long: null,
    lat: null,
  },
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export let persistor = persistStore(store);

export default store;
