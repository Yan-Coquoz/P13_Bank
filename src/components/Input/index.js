import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../../Utils";
import "./style.scss";

/**
 * @prop   {String}  type   Type de l'input
 * @prop   {String}  label  Contenu du label et propriété htmlFor ainsi que l'id de l'input
 * @prop   {function} onChange initie l'action
 * @prop   {String}  value valeur d'entree de l'input
 * @prop   {String}  name identifiant de l'input
 *
 * @return  {React.ReactElement} une div avec un label et un input
 */
const Input = ({ type, label, onChange, value, name, placeholder }) => {
  const handleChange = (evt) => {
    const inputValue = evt.target.value;
    onChange(name, inputValue);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{fromLowerToUpperCase(label)}</label>
      <input
        type={type}
        id={label}
        required
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
};
Input.defaultProps = {
  require: false,
  label: "",
};
export default Input;
