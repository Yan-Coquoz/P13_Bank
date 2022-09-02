import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import user from "../../assets/user_bank.svg";
import "./style.scss";

const Header = () => {
  return (
    <nav className="header__nav">
      <div className="header__nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="header__nav-logo__image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>
      <div className="header__nav__item">
        <Link to="/">
          <img src={user} alt="user icon" className="user_icon" /> Sign in
        </Link>
      </div>
    </nav>
  );
};

//  Header.propTypes = {};
export default Header;
