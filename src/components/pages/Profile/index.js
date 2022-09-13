import React from "react";

import Welcome from "../../../containers/Welcome";
import Account from "../../../containers/Account";
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
        linkId={1}
      />
      <Account
        title="Savings"
        type="Available"
        amount={"10,928.42"}
        deal={6712}
        linkId={2}
      />
      <Account
        title="Credit Card"
        type="Current"
        amount={"184.30"}
        deal={8349}
        linkId={3}
      />
    </div>
  );
};

export default Profile;
