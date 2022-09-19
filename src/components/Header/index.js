import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import logout from "../../assets/sign_out.svg";
import user from "../../assets/user_bank.svg";
import "./style.scss";

/**
 * C'est une fonction qui renvoie un élément de navigation avec un logo et un lien vers la page de
 * connexion si l'utilisateur n'est pas connecté, et un lien vers le profil de l'utilisateur et un lien
 * pour se déconnecter si l'utilisateur est connecté
 *
 * @prop   {String}  firstName       prénom de l'utilisateur
 * @prop   {Boolean}  isLogged        Si l'utilisateur est connecté
 * @prop   {Function}  disconnect      Si l'utilisateur a choisi de garder sa session
 * @prop   {Function}  onlyDisconnect  Si l'utilisateur à fermer sa session
 * @prop   {String}  id              De l'utilisateur
 * @prop   {Boolean}  remember        choix d'une session (ouverte / fermée)
 *
 * @return  {React.ReactElement}  Un élément de navigation avec un logo et un lien vers la page de connexion.
 */
const Header = ({
  firstName,
  isLogged,
  disconnect,
  onlyDisconnect,
  id,
  remember,
}) => {
  function handleDisconnect() {
    if (remember) {
      disconnect(remember);
    } else {
      onlyDisconnect();
    }
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
      {/* Gestion au token */}
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
              {firstName}
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
  firstName: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  remember: PropTypes.bool.isRequired,
  disconnect: PropTypes.func,
  onlyDisconnect: PropTypes.func,
};
Header.defaultProps = {
  id: "",
  remember: false,
};
export default Header;
