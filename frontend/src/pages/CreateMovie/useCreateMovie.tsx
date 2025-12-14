import React, { useState } from "react";
import { CreateMovie } from "../../services/movieService.tsx";
import { Movie } from "../../types/movie.ts";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/movieSlice.ts";

export default function useCreateMovie() {
  const dispatch = useDispatch();

  const [formCadastro, setFormCadastro] = useState<Movie>({
    title: "",
    year: 0,
    genre: "",
    director: "",
    description: "",
    urlImage: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormCadastro(prev => ({
      ...prev,
      [name]: name === "year" ? Number(value) : value
    }));
  };

  const validateForm = () => {
    const { title, year, genre, director, description, urlImage } = formCadastro;

    if (!title.trim()) return "O título é obrigatório.";
    if (!genre.trim()) return "O gênero é obrigatório.";
    if (!director.trim()) return "O diretor é obrigatório.";
    if (!description.trim()) return "A descrição é obrigatória.";
    if (!urlImage.trim()) return "A URL da imagem é obrigatória.";

    if (year <= 1800 || year > new Date().getFullYear()) {
      return "Ano inválido.";
    }

    return null;
  };

  const handleSave = async () => {

    const error = validateForm();
    if (error) {
      toast.error(error, { theme: "dark" });
      return;
    }

    try {
      const movieSave = await CreateMovie(formCadastro);
      dispatch(addMovie(movieSave));

      toast.success("Filme cadastrado com sucesso!", { theme: "dark" });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar filme", { theme: "dark" });
    }
  };

  return {
    formCadastro,
    setFormCadastro,
    handleChange,
    handleSave
  };
}
