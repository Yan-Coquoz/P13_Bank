import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

const Account = ({ title, amount, deal, type }) => {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h3 className="account__content-wrapper__title">
          Argent Bank {title} (x{deal})
        </h3>
        <p className="account__content-wrapper__amount">${amount}</p>
        <p className="account__content-wrapper__amount-description">
          {type} Balance
        </p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          nameClass="transaction-button"
          title="View transactions"
          type="button"
        ></Button>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  deal: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default Account;
