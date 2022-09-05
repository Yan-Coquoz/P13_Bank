import React from "react";
import PropTypes from "prop-types";
import { fromLowerToUpperCase } from "../../Utils";
import "./style.scss";

/**
 * @prop   {String}  type   Type de l'input
 * @prop   {String}  label  Contenu du label et propriété htmlFor ainsi que l'id de l'input
 *
 * @return  {React.ReactElement} une div avec un label et un input
 */
const Input = ({ type, label, onChange, value }) => {
  const handleChange = (evt) => {
    // console.log("key: ", evt.target.value, " value :", label);
    const value = evt.target.value;
    onChange(label, value);
  };
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{fromLowerToUpperCase(label)}</label>
      <input
        type={type}
        id={label}
        required
        name={label}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
};
Input.defaultProps = {
  require: false,
};
export default Input;
