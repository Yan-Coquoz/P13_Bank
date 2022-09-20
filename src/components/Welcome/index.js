// @ts-nocheck
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Input from "../../containers/Input";
import "./style.scss";

/**
 * Il affiche un message de bienvenue avec le prénom et le nom de l'utilisateur, un bouton pour
 * modifier le nom, un formulaire pour modifier le nom et un message de confirmation
 *
 * @param   {String}  firstName     prénom de l'utilisateur
 * @param   {String}  lastName      nom de l'utilisateur
 * @param   {Function}  newIdentity   fonction déclencheur de l’événement
 * @param   {String}  message       message de confirmation de la prise en compte de la requête
 * @param   {Function}  cleanMessage  fonction déclencheur de l’événement
 *
 * @return  {React.ReactElement}
 */
const Welcome = ({
  firstName,
  lastName,
  newIdentity,
  message,
  cleanMessage,
}) => {
  /**
   * Il vérifie si la variable firstName est vide ou non. S'il n'est pas vide, il ajoute la classe
   * active au conteneur de formulaire
   */
  function handleRenderModale() {
    if (firstName.length > 0) {
      document
        .querySelector(".formulaire_container")
        .classList.toggle("active");
    }
  }

  /**
   * La fonction prend un événement comme argument, empêche l'action par défaut de l'événement,
   * récupère les valeurs des première et deuxième entrées, puis appelle la fonction newIdentity avec
   * les valeurs des première et deuxième entrées comme arguments
   * @param {} evt - l'objet événement
   */
  function handleSendForm(evt) {
    evt.preventDefault();

    const f_Name = evt.target[0].value;
    const l_Name = evt.target[1].value;

    newIdentity({ f_Name, l_Name });
  }

  useEffect(() => {
    let time;
    const span = document.querySelector(".formulaire_container__confirmation");
    span.classList.toggle("active");
    time = setTimeout(() => {
      span.classList.toggle("active");
      cleanMessage();
    }, 2000);
    return () => clearTimeout(time);
  });

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
        onClick={handleRenderModale}
      />

      <form className="formulaire_container" onSubmit={handleSendForm}>
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
        {<span className="formulaire_container__confirmation">{message}</span>}
        <div className="formulaire_container__bloc-button">
          <Button type="submit" title="Save" nameClass="edit-button" />
          <Button
            type="button"
            title="Cancel"
            nameClass="edit-button"
            onClick={handleRenderModale}
          />
        </div>
      </form>
    </div>
  );
};

Welcome.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  newIdentity: PropTypes.func,
  message: PropTypes.string,
  cleanMessage: PropTypes.func,
};

export default Welcome;
