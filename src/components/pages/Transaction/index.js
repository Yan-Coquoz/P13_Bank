import React from "react";
import CollapsibleTable from "../../Table";
import Transaction_Header from "../../Transaction_Header";
import "./style.scss";

const Transaction = () => {
  return (
    <div className="main bg-dark">
      <Transaction_Header />
      <CollapsibleTable />
    </div>
  );
};

export default Transaction;
