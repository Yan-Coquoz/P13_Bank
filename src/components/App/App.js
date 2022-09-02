import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Home from "../pages/Home";
import Header from "../Header";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
