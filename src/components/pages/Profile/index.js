import React from "react";
// import PropTypes from "prop-types";
// import Button from "../../Button";
import Welcome from "../../Welcome";
import Account from "../../Account";
import "./style.scss";

const Profile = () => {
  return (
    <div className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </div>
  );
};

//  Profile.propTypes = {};
export default Profile;
