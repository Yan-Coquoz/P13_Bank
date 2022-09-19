import React from "react";
import PropTypes from "prop-types";
import { checkImage } from "../../Utils";
import "./style.scss";

/**
 * Il prend trois accessoires et renvoie un div avec une image, un titre et un paragraphe
 *
 * @prop   {String}  image  image
 * @prop   {String}  title  titre de la carte
 * @prop   {String}  texte  contenu de la carte
 *
 * @return  {React.ReactElement}
 */
const Card = ({ image, title, texte }) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={checkImage(image)} />
      <h3 className="feature-item-title">{title}</h3>
      <p>{texte}</p>
    </div>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  texte: PropTypes.string,
};
export default Card;
