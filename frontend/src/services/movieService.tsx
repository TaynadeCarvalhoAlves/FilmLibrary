import axios from "axios";
import { Movie } from "../types/movie";

const API_URL = "https://localhost:7265/api/Movies";

// Listar filmes
export async function GetAllMovies() {
    const response = await axios.get(API_URL);
    return response.data;
}

// Listar filmes por id
export async function GetMovieById(id: string) {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

// Criar filme
export async function CreateMovie(movie: Movie) {
  console.log("🚀 ~ CreateMovie ~ movie:", movie)
  const response = await axios.post(API_URL, movie);
  console.log("🚀 ~ CreateMovie ~ response:", response)
  return response.data;
}

// Atualizar filme
export async function UpdateMovie(id: string, movie: Movie) {
  return axios.put(`${API_URL}/${id}`, movie);
}

// Deletar
export async function DeleteMovie(id: string) {
  return axios.delete(`${API_URL}/${id}`);
}