import React from "react";
import Welcome from "../../../containers/Welcome";
import Account from "../../../containers/Account";
import { dataAmounts } from "../../../Data/cardDatas";
import "./style.scss";

/**
 * Il renvoie un div avec un composant Welcome et une liste de composants Account
 * @returns Un div avec un composant de bienvenue et une liste de composants de compte.
 */
const Profile = () => {
  return (
    <div className="main bg-dark">
      <Welcome />
      <h2 className="sr-only">Accounts</h2>
      {dataAmounts.map((acc) => {
        return <Account key={acc.linkId} {...acc} />;
      })}
    </div>
  );
};

export default Profile;
