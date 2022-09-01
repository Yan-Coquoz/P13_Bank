import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        Copyright {new Date().getFullYear()} Argent Bank
      </p>
    </div>
  );
};

export default Footer;
