import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

import { App } from './App';
import { CharacterPage } from './pages/CharacterPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components/NavbarComponent';
import { FavoritesContext, FavoritesProvider } from './context/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/people/:id" element={<CharacterPage />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);