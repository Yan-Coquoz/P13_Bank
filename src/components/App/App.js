import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer";
import Home from "../pages/Home";
import Header from "../../containers/Header";
import Login from "../../containers/Login";
import Profile from "../pages/Profile";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="user">
          <Route path=":id" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
