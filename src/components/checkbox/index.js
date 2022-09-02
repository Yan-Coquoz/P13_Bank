import React from "react";
// import PropTypes from "prop-types";
import "./style.scss";

const Checkbox = () => {
  return (
    <div className="input-remember">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>
  );
};

//  Checkbox.propTypes = {};
export default Checkbox;
