import React from "react";
// import PropTypes from "prop-types";
import Welcome from "../../../containers/Welcome";
import Account from "../../Account";
import "./style.scss";

const Profile = () => {
  return (
    <div className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Checking"
        amount={"2,082.79"}
        deal={8349}
        type="Available"
      />
      <Account
        title="Savings"
        type="Available"
        amount={"10,928.42"}
        deal={6712}
      />
      <Account
        title="Credit Card"
        type="Current"
        amount={"184.30"}
        deal={8349}
      />
    </div>
  );
};

//  Profile.propTypes = {};
export default Profile;
