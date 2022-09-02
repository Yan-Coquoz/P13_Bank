import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Home from "../pages/Home";
import Header from "../Header";
import Login from "../pages/Login";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
