import React, { Component } from 'react';
import './perso.css'
//import Heal from './heal'


class Eggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: "",
      caliber: "",
      farming: "",
      rarity: "",
      power: "",
      victory: null,

    }

  }

  componentDidMount() {
    this.apiEggs();

  }
  apiEggs() {
    // Récupération de l'employé via fetch
    fetch("http://easteregg.wildcodeschool.fr/api/eggs/random")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        console.log(data);
        this.setState({
          name: data.name,
          image: data.image,
          caliber: data.caliber,
          farming: data.farming,
          rarity: data.rarity,
          power: data.power,

        });
        console.log(this.state.caliber)
      });
  }



  render() {
    return (
      <div>
        {this.state.name &&
          <div className="card bg-light">
            <img src={this.state.image} className="card-img-top persoImage" alt="Your knight" />
            <div className="card-body">
              <h5 className="card-title">{this.state.name}</h5>
              <p className="card-text">
                <span className="badge badge-danger">♥ {this.props.life}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-danger">caliber : {this.state.caliber}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-danger">Farming : {this.state.farming}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-danger">Rarity : {this.state.rarity}</span>
              </p>


              <p>
                <span className="badge badge-warning">{this.state.power}</span>
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Eggs;