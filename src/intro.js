import React, { Component } from 'react';




class Intro extends Component {


  render() {
    return (
      <div>
        <div className="ButtonSW">
          <button className="BoutonSW">JOUER</button>
        </div>
        <section className="star-wars">

          <div className="crawl">
            <div className="title">
              <p>Episode I</p>
              <h1>La jeunesse de Tete d'Oeuf</h1>
            </div>

            <p>Dans une galaxie lointaine, trés lointaine, une équipe d'Oeufs de l'espace commence son voyage.
  Aprés moult aventures spatiales, les Oeufs arrivent sur Terre, et c'est pas pour tailler le bout de gras.
          </p>

            <p>Prennez place dans un Jeu révolutionnaire et combattez pour sauver votre civilisation.
              Tuez quicquonce se mettras en travers de votre chemin.
          </p>

            <p>Vous êtes notre dernier espoir, Capitaine Tête d'oeuf, menez vos troupes à la victoire !….</p>
          </div>
        </section>

      </div >
    );
  }
}



export default Intro;