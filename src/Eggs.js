import React, { Component } from 'react';
import './perso.css'
//import Heal from './heal'


class Eggs extends Component {
  render() {
    return (
      <div>
        {this.props.nameEgg &&
          <div className="cardShadow card bg-light">
            <img src={this.props.imageEgg} className="card-img-top persoImage" alt="Your knight" />
            <div className="card-body">
              <h5 className="card-title">{this.props.nameEgg}</h5>
              <p className="card-text">
                <span className="badge badge-danger">♥ {this.props.lifeEgg}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-primary">caliber : {this.props.caliberEgg}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-primary">Farming : {this.props.farmingEgg}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-primary">Rarity : {this.props.rarityEgg}</span>
              </p>
              <p>
                <span className="badge badge-warning">{this.props.powerEgg}</span>
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Eggs;