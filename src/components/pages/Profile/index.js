import React, { useEffect } from "react";
import Welcome from "../../../containers/Welcome";
import Account from "../../../containers/Account";
import { dataAmounts } from "../../../Data/cardDatas";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * Il renvoie un div avec un composant Welcome et une liste de composants Account
 * @returns Un div avec un composant de bienvenue et une liste de composants de compte.
 */
const Profile = ({ userId }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof userId !== "undefined") {
      if (id !== userId) {
        navigate("/page-error");
      }
    }
  }, [id]);

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

Profile.propTypes = {
  userId: PropTypes.string,
};
Profile.defaultProps = {
  userId: "",
};
export default Profile;
