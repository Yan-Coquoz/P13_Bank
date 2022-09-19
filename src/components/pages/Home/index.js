import React from "react";
import Feature from "../../Feature";

import "./style.scss";

/**
 * Il renvoie un élément principal qui contient un div avec une classe de héros, une section avec un composant Feature
 * @returns Un composant React.
 */
const Home = () => {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <Feature />
    </main>
  );
};

export default Home;
