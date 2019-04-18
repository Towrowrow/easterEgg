import React, { Component } from 'react';
import './rooms.css';



class Monster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: "",
      skills: "",
      origin: "",
      species: "",
      victory: null,

    }

  }

  componentDidMount() {
    this.apiMonster();

  }

  apiMonster() {
    // Récupération de l'employé via fetch
    fetch("http://easteregg.wildcodeschool.fr/api/characters/random")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        console.log(data);
        this.setState({
          name: data.name,
          image: data.image,
          skills: data.skills,
          origin: data.origin,
          species: data.species,

        });
        console.log(this.state.caliber)
      });
  }





  render() {
    return (
      <div>
        {this.state.name &&
          <div className="card bg-light">
            <img src={this.state.image} className="card-img-top monsterImage" alt={this.state.name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.name}</h5>
              <p className="card-text">
                <span className="badge badge-danger">♥ {this.state.life}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-danger">Origin :  {this.state.origin}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-danger">Species : {this.state.species}</span>
              </p>

              {this.state.skills.map(skill =>
                <p className="card-text">

                  <span className="badge badge-warning">
                    {skill}
                  </span>
                </p>)}

              <p>
              </p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Monster;