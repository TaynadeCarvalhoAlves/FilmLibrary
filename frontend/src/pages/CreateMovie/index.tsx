import React from "react";
import { ContainerMain, ContainerModal, StyledBar, StyledButtonSave, StyledDirector, StyleDescription, 
    StyledGenre, StyledTitle, StyledUrl, StyledYear } from "./style.ts";
import useCreateMovie from "./useCreateMovie.tsx";
import BackButton from "../../components/BackButton/index.tsx";

export default function CreateMovie() { 
    const {
        formCadastro,
        handleChange,
        handleSave  
    } = useCreateMovie();


return(
    <>
      <BackButton />
    <ContainerMain>
        <StyledBar>
            Cadastrar Novo Filme
        </StyledBar>
        <ContainerModal>
            <StyledTitle
            type="text" 
            placeholder="Título do Filme"
            name="title"
            value={formCadastro.title}
            onChange={handleChange}
            required
            />
            <StyledYear
            type="text"
            placeholder="Ano de Lançamento"
            name="year"
            value={formCadastro.year}
            onChange={handleChange}
            />

            <StyledGenre
            type="text"
            placeholder="Gênero"
            name="genre"
            value={formCadastro.genre}
            onChange={handleChange}
            />

             <StyledDirector
            type="text"
            placeholder="Diretor"
            name="director"
            value={formCadastro.director}
            onChange={handleChange}
            />

            <StyledUrl
            type="text"
            placeholder="Url da Imagem"
            name="urlImage"
            value={formCadastro.urlImage}
            onChange={handleChange}
            />

            <StyleDescription
            type="text"
            placeholder="Descrição:"
            name="description"
            value={formCadastro.description}
             onChange={handleChange}
            />

            <StyledButtonSave
                type="button"
                onClick={handleSave}
                >
                    Salvar
            </StyledButtonSave>

        </ContainerModal>
    </ContainerMain>
    </>
)

}
