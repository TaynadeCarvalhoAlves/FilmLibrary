import { useEffect, useState } from "react";
import {  MovieCard, MovieImage, MovieContent, MovieTitle, MovieYear } from "./style.ts";
import { GetAllMovies } from "../../services/movieService.tsx";
import { Movie } from "../../types/movie.ts";
import { useNavigate } from "react-router-dom";


export default function ListMovies({search}: {search: string}) {
    const [listMovies, setListMovies] = useState<Movie[]>([]);
     const navigate = useNavigate();
    console.log("🚀 ~ ListMovies ~ listMovies:", listMovies)

    useEffect(() => {
          async function loadMovies() {
            const response = await GetAllMovies();
            console.log("🚀 ~ loadMovies ~ response:", response)
            setListMovies(response);
          }
          loadMovies();
    }, []);

    const filteredMovies = listMovies.filter((movie) =>
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