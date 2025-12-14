import { useEffect } from "react";
import {  MovieCard, MovieImage, MovieContent, MovieTitle, MovieYear } from "./style.ts";
import { GetAllMovies } from "../../services/movieService.tsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../store/movieSlice.ts";
import { RootState } from "../../store";


export default function ListMovies({search}: {search: string}) {
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movies.list);
    const navigate = useNavigate();
    console.log("🚀 ~ ListMovies ~ listMovies:", movies)

    useEffect(() => {
          async function loadMovies() {
            const response = await GetAllMovies();
            console.log("🚀 ~ loadMovies ~ response:", response)
            dispatch(setMovies(response));
          }
          loadMovies();
    }, []);

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
    {filteredMovies.map((movie => (
    <MovieCard 
      key={movie.id}
      onClick={() => navigate('/movie-details/', {state: { id: movie.id }})}
      >
      
      <MovieImage image={movie.urlImage} />

      <MovieContent>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>{movie.year}</MovieYear> 
      </MovieContent>
    </MovieCard>
  )))};
  </>
  );
}