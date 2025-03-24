import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home";
import AboutDetails from "./pages/AboutDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
