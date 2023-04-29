import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Noticia from "./pages/news/News.jsx";
import Home from "./pages/home/Home.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Noticia />} path="/noticia" />
      </Routes>
    </BrowserRouter>
  );
}
