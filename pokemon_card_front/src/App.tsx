import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/login";
import Index from "./components/index";
import React from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard/pokemonCard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Index/>}></Route>
        <Route path="" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
