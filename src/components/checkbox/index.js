// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Checkbox = ({ checked, name, onChange }) => {
  function handleChange(evt) {
    const isChecked = evt.target.checked;
    onChange(name, isChecked);
  }

  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id="remember-me"
        value={!!checked}
        onChange={handleChange}
        name={name}
      />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  checked: false,
};
export default Checkbox;
