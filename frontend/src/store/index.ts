import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice.ts";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
