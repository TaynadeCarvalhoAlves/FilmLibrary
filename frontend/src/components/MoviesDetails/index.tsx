import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Movie } from "../../types/movie";
import { GetMovieById } from "../../services/movieService.tsx";
import { Container, ContainerDetalhes, ContainerMain, ImageSection, InfoSection, MovieDescription, MovieImage, MovieTitle, MovieYear } from "./style.ts";
import BackButton from "../../components/BackButton/index.tsx";

    export default function MoviesDetails() {
        const { state } = useLocation();
        console.log("🚀 ~ MoviesDetails ~ state:", state)
        const [movie, setMovie] = useState<Movie | null>(null);
        
        useEffect(() => {
            async function loadMovie() {
            if (!state?.id) return;

            const response = await GetMovieById(state.id);
            setMovie(response);
        }
        loadMovie();
    }, [state]);   

  if (!movie) return <p>Carregando...</p>;


    return (
<>
          

        <Container>
            <BackButton />
      <InfoSection>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>
            Ano de Lançamento: {movie.year}
        </MovieYear>
         <MovieYear>
            Gênero: {movie.genre}
        </MovieYear>
         <MovieYear>
            Diretor: {movie.director}
        </MovieYear>
        <MovieDescription>
           Sinopse: {movie.description}
        </MovieDescription>
      </InfoSection>

      <ImageSection>
        <MovieImage src={movie.urlImage} alt={movie.title} />
      </ImageSection>
    </Container>
    </>
    );
}
