import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eggs from './Eggs';
import Monsters from './Monsters';
import Actions from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eggsLife: 10,
      disabled: false,
      nameMonster: "",
      imageMonster: "",
      skillsMonster: "",
      originMonster: "",
      speciesMonster: "",
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
          nameMonster: data.name,
          imageMonster: data.image,
          skillsMonster: data.skills,
          originMonster: data.origin,
          speciesMonster: data.species,

        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row justify-content-center my-5">
          <div className="col-3">
            <Eggs
              life={this.state.eggsLife}
              disabled={this.state.disabled}
            />
          </div>
          <div className="col-3">
            <Actions
              healing={this.healing}
              disabled={this.state.disabled}
            />
          </div>
          <div className="col-3">
            <Monsters
              nameMonster={this.state.nameMonster}
              imageMonster={this.state.imageMonster}
              skillsMonster={this.state.skillsMonster}
              originMonster={this.state.originMonster}
              speciesMonster={this.state.speciesMonster}
            />
          </div>
        </div>

      </div >
    );
  }
}

export default App;
