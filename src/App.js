import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eggs from './Eggs';
import Monsters from './Monsters';
import Actions from './actions';
import NameModal from './Modal';
import lifeEgg from './functions/lifeEgg';
import lifeCharacter from './functions/lifeCharacter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      // eggs state
      nameEgg: "",
      imageEgg: "",
      caliberEgg: "",
      farmingEgg: "",
      rarityEgg: "",
      powerEgg: "",
      victoryEgg: null,
      lifeEgg: "",
      nameMonster: "",
      imageMonster: "",
      skillsMonster: "",
      originMonster: "",
      speciesMonster: "",
      lifeMonster: "",

      // popup state
      visibleModal: false,
      userName: "",
      welcomeMessage: "",
    }
  }

  componentDidMount() {
    this.apiEggs();
    this.apiMonster();
    this.openModal();
  }


  // popup open
  openModal() {
    this.setState({
      visibleModal: true
    });
  }
  // popup close
  closeModal() {
    this.setState({
      visibleModal: false
    });
  }

  takeUserName = () => {
    this.closeModal()
    console.log(`Welcome ${this.state.userName}`)
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      welcomeMessage: `Welcome ${this.state.userName}`,
      userName: `${event.target.value}`,
      [name]: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.powerEgg !== this.state.powerEgg) {
      this.setState({ lifeEgg: lifeEgg(this.state.powerEgg) })
    }
    if (prevState.skillsMonster !== this.state.skillsMonster) {
      this.setState({ lifeMonster: lifeCharacter(this.state.skillsMonster) })
    }
  }



  // api calls
  apiEggs() {
    // Récupération de l'employé via fetch
    fetch("http://easteregg.wildcodeschool.fr/api/eggs/random")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          nameEgg: data.name,
          imageEgg: data.image,
          caliberEgg: data.caliber,
          farmingEgg: data.farming,
          rarityEgg: data.rarity,
          powerEgg: data.power,
        });
      });
  }

  apiMonster() {
    // Récupération de l'employé via fetch
    fetch("http://easteregg.wildcodeschool.fr/api/characters/random")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données

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
        <NameModal
          visible={this.state.visibleModal}
          submitName={this.takeUserName}
          userName={this.state.userName}
          onChange={this.onChange}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row justify-content-center my-5">
          <div className="col-3">
            <Eggs
              nameEgg={this.state.nameEgg}
              imageEgg={this.state.imageEgg}
              caliberEgg={this.state.caliberEgg}
              farmingEgg={this.state.farmingEgg}
              rarityEgg={this.state.rarityEgg}
              powerEgg={this.state.powerEgg}
              victoryEgg={this.state.victoryEgg}
              lifeEgg={this.state.lifeEgg}
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
              lifeMonster={this.state.lifeMonster}
            />
          </div>

        </div>

      </div >
    );
  }
}

export default App;
