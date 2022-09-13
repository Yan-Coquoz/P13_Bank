import React from "react";
import CollapsibleTable from "../../Table";
import { useParams } from "react-router-dom";
import "./style.scss";

const Transaction = () => {
  const compoId = useParams();
  console.log(compoId);
  return (
    <div className="main bg-dark">
      <h1>Transactions</h1>
      <CollapsibleTable />
    </div>
  );
};

export default Transaction;
