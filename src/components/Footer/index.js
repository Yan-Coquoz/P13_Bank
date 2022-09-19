import React from "react";

import "./style.scss";
/**
 * Il renvoie un div avec une classe de footer, qui contient un paragraphe avec une classe de
 * footer__text, qui contient le texte "Copyright 2020 Argent Bank"
 *
 * @return  {React.ReactElement}
 */
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
