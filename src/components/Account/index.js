import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.scss";

/**
 * C'est une fonction qui renvoie une section avec un titre, un montant, une offre, un type et un
 * linkId
 * @prop {String} title Nom du compte
 * @prop {String} amount Somme sur le compte
 * @prop {Number} deal Nombre de transaction sur le compte
 * @prop {String} type type de situation
 * @prop {Number} linkId id du compte
 * @returns {React.ReactElement}
 */
const Account = ({ title, amount, deal, type, linkId }) => {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h3 className="account__content-wrapper__title">
          {"Argent Bank " + title} ({"x" + deal})
        </h3>
        <p className="account__content-wrapper__amount">${amount}</p>
        <p className="account__content-wrapper__amount-description">
          {type + " Balance"}
        </p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to={`account/${linkId}`} className="account__link-button">
          <Button
            nameClass="transaction-button"
            title="View transactions"
            type="button"
          ></Button>
        </Link>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  deal: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  linkId: PropTypes.number.isRequired,
};
export default Account;
