import React from "react";
import CollapsibleTable from "../../Table";
import Transaction_Header from "../../Transaction_Header";
import "./style.scss";

/**
 * Il renvoie un div avec une classe de main bg-dark, qui contient le composant Transaction_Header et
 * le composant CollapsibleTable
 * @returns Un div avec la classe de main bg-dark.
 */
const Transaction = () => {
  return (
    <div className="main bg-dark">
      <Transaction_Header />
      <CollapsibleTable />
    </div>
  );
};

export default Transaction;
