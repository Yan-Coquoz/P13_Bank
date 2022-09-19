// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * Il rend une case à cocher qui, lorsqu'elle est cliqué, appelle la fonction onChange avec le nom de
 * la case à cocher et si elle est cochée ou non
 *
 * @prop   {Boolean}  checked   [checked description]
 * @prop   {String}  name      [name description]
 * @prop   {Function}  onChange  [onChange description]
 *
 * @return  {React.ReactElement}            Un composant React qui affiche une case à cocher.
 */
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
  onchange: () => {},
};
export default Checkbox;
