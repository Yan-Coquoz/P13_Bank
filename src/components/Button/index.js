import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
/**
 *
 *  The Button function takes in two arguments, nameClass and title, and returns a button element with
 * the class name of nameClass and the text of title.
 * @prop   {String}  nameClass  contenu de l'attribut className
 * @prop   {String}  title      intitulé du bouton
 * @prop   {String}  type      type du bouton
 * @prop   {Function} onClick  event sur le bouton
 * @return  {React.ReactElement}
 */
const Button = ({ nameClass, title, type, onClick }) => {
  function handleClick(evt) {
    return onClick(evt);
  }
  return (
    <button className={nameClass} type={type} onClick={handleClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  nameClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
};
export default Button;
