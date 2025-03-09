import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import FilterPage from './pages/FilterPage';
import MainPage from './pages/MainPage';
import NoPage from './pages/NoPage';
import PresetPage from './pages/PresetPage';
import LoginPage from './pages/LoginPage.tsx';

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route index element={<MainPage />} />
    <Route path="/filters" element={<FilterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/presets" element={<PresetPage />} />
    <Route path="*" element={<NoPage />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
