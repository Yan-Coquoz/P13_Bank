// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Input from "../../containers/Input";
import "./style.scss";

const Welcome = ({ firstName, lastName }) => {
  function handleOpenModale() {
    document.querySelector(".formulaire_container").classList.toggle("active");
  }
  function handleCloseModale() {
    document.querySelector(".formulaire_container").classList.toggle("active");
  }
  function handleSendForm() {
    console.log("envois du formulaire");
  }
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <span>
          {firstName} {lastName} !
        </span>
      </h1>
      <Button
        type="button"
        title="Edit Name"
        nameClass="edit-button"
        onClick={handleOpenModale}
      />

      <form className="formulaire_container">
        <div className="formulaire_container__bloc-input">
          <Input
            type={"text"}
            name={"firstName"}
            value={firstName}
            placeholder={firstName}
          />
          <Input
            type={"text"}
            name={"lastName"}
            value={lastName}
            placeholder={lastName}
          />
        </div>
        <div className="formulaire_container__bloc-button">
          <Button
            type="button"
            title="Save"
            nameClass="edit-button"
            onClick={handleSendForm}
          />
          <Button
            type="button"
            title="Cancel"
            nameClass="edit-button"
            onClick={handleCloseModale}
          />
        </div>
      </form>
    </div>
  );
};

Welcome.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Welcome;
