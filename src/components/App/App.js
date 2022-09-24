import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "components/Footer";
import Home from "components/pages/Home";
import Profile from "containers/Profile";
import Transaction from "components/pages/Transaction";
import ErrorPage from "components/pages/ErrorPage";
import Header from "containers/Header";
import Login from "containers/Login";
import "./App.scss";

/**
 * La fonction App renvoie un div avec un en-tête, des itinéraires et un pied de page
 */
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
        <Route path="user/:id/account">
          <Route path=":id" element={<Transaction />} />
        </Route>
        <Route path="/page-error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/page-error" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
