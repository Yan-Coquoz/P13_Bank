import React from "react";
// import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

const Account = () => {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h3 className="account__content-wrapper__title">
          Argent Bank Checking (x8349)
        </h3>
        <p className="account__content-wrapper__amount">$2,082.79</p>
        <p className="account__content-wrapper__amount-description">
          Available Balance
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

//  Account.propTypes = {};
export default Account;
