import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import logout from "../../assets/sign_out.svg";
import user from "../../assets/user_bank.svg";
import "./style.scss";

const Header = ({ username, isLogged, disconnect, id }) => {
  function handleDisconnect() {
    disconnect();
  }

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
        {!isLogged ? (
          <Link to="/login">
            <img src={user} alt="user icon" className="user_icon" />
            Sign in
          </Link>
        ) : (
          <>
            <Link to={`/user/${id}`}>
              <img src={user} alt="user icon" className="user_icon" />
              {username}
            </Link>
            <Link to="/" onClick={handleDisconnect}>
              <img src={logout} alt="Logout icon" className="user_icon" /> Sign
              Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

Header.propTypes = {
  username: PropTypes.string,
  isLogged: PropTypes.bool,
  disconnect: PropTypes.func,
  id: PropTypes.string,
};
Header.defaultProps = {
  id: "",
};
export default Header;
