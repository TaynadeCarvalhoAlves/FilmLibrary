import React, { useState } from "react";
import SideBar from "../../components/Sidebar/index.tsx";
import { ContainerMain, SearchContainer, SearchIcon, StyledHomeCards, StyledSearch } from "./style.ts";
import ListMovies from "../../components/ListMovies/index.tsx";

export default function Home() {
    const [search, setSearch] = useState<string>("");

    return (
       <ContainerMain>
        <SideBar/>
           
           <SearchContainer>
            <SearchIcon />
                <StyledSearch 
                    placeholder="Buscar Filmes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </SearchContainer>
           
        <StyledHomeCards>
            <ListMovies search={search}/>
        </StyledHomeCards>
       </ContainerMain>
    )
}