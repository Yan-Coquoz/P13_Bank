import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
/**
 *
 *  The Button function takes in two arguments, nameClass and title, and returns a button element with
 * the class name of nameClass and the text of title.
 * @prop   {String}  nameClass  contenu de l'attribut className
 * @prop   {String}  title      Intitulé du bouton
 *
 * @return  {React.ReactElement}
 */
const Button = ({ nameClass, title }) => {
  return <button className={nameClass}>{title}</button>;
};

Button.propTypes = {
  nameClass: PropTypes.string,
  title: PropTypes.string,
};
export default Button;
