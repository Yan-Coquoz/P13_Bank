// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { dataAmounts } from "../../Data/cardDatas";

/**
 * C'est un composant fonctionnel qui rend l'en-tête de la transaction
 *
 * @return  {React.ReactElement} Un composant fonctionnel qui renvoie une div avec un titre, un montant et un type.
 */
const Transaction_Header = () => {
  const id = useParams();
  const [data, setData] = useState(null);
  const [getdata, setGetData] = useState(false);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (!isData) {
      setIsData(true);
      const transaction = dataAmounts.filter((ele) => {
        return ele.linkId === Number(id.id);
      });
      setData(transaction[0]);
      setGetData(true);
    } else {
      setGetData(false);
    }
  }, [id]);

  return (
    <div className="h_transaction">
      {getdata && isData && (
        <>
          <h3 className="h_transaction__title">
            {"Argent Bank " + data.title} ({"x" + data.deal})
          </h3>
          <p className="h_transaction__amount">${data.amount}</p>
          <p className="h_transaction__type">{data.type} Balance</p>
        </>
      )}
    </div>
  );
};

export default Transaction_Header;
