import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/movie.ts";

interface MoviesState {
  list: Movie[];
}

const initialState: MoviesState = {
  list: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.list = action.payload;
    },

    addMovie(state, action: PayloadAction<Movie>) {
      state.list.push(action.payload);
    },
  },
});

export const { setMovies, addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
