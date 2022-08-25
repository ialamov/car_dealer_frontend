import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from '../pages/Home/Home';
import { Search } from '../pages/Search/Search';
import { Register } from '../pages/Register/Register';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}