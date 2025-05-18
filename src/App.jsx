import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import Home from "./pages/Home";
import AboutDetails from "./pages/AboutDetails";
import Footer from "./components/Footer/Footer";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTopButton from "./components/Reusables/ScrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutDetails />} />
        <Route path="/service/:id" element={<ServiceDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
