import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Checkbox = ({ checked, name }) => {
  return (
    <div className="input-remember">
      <input type="checkbox" id="remember-me" value={!!checked} name={name} />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
};
Checkbox.defaultProps = {
  checked: false,
};
export default Checkbox;
