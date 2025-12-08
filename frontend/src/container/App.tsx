import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/index.tsx';
import CreateMovie from '../pages/CreateMovie/index.tsx';
import MoviesDetails from '../components/MoviesDetails/index.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from '../types/theme.ts';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {

return (
    <>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/CreateMovie' element={<CreateMovie />} /> 
                <Route path='/movie-details' element={<MoviesDetails />} />
                {/* <Route path='/movie/:id' element={<MoviesDetails />} /> */}
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
     <ToastContainer />
     </>
);

}
