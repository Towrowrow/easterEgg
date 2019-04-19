import React, { Component } from 'react';
import { NavLink } from "react-router-dom";



class Intro extends Component {


  render() {
    return (
      <div className="intro">
        <NavLink to="/">
          <div className="ButtonSW">
            <button className="BoutonSW">PLAY</button>
          </div>
        </NavLink>
        <section className="star-wars">

          <div className="crawl">
            <div className="title">
              <p>OMELET WARS</p>
              <h1>A NEW HOPE</h1>
            </div>

            <br />
            <p>CREDITS : </p>
            <div className="SSW">
              <br />
              <p>Developped by: L'ADR STUDIO</p>
              <p>Game design: Mark Hamill </p>
              <p>Music: ASMR Production</p>
              <p>Actors: L'ADR STUDIO</p>
              <p>Scenarist: Tolkien </p>
              <br />
              <p>SPECIAL THANKS:</p>
              <p> Skippy Production </p>
              <p>RedBull</p>
              <p>Cafeine </p>
              <p>WILD CODE SCHOOL</p>
              <p>That's all folks !</p>
            </div>
          </div>
        </section>
      </div >
    );
  }
}



export default Intro;