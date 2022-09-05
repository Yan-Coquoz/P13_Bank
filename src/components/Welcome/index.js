import React from "react";
// import PropTypes from "prop-types";
import Button from "../Button";

import "./style.scss";

const Welcome = () => {
  let name = "YAN";

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name}
      </h1>
      <Button type="button" title="Edit Name" nameClass="edit-button" />
    </div>
  );
};

//  Welcome.propTypes = {};
export default Welcome;
