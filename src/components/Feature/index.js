// @ts-nocheck
import React from "react";
import Card from "../Card";
import { datas } from "../../Data/cardDatas";
import "./style.scss";

const Feature = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      {datas.map((ele, key) => {
        return (
          <Card
            key={key}
            image={ele.image}
            title={ele.title}
            texte={ele.texte}
          />
        );
      })}
    </section>
  );
};

export default Feature;
