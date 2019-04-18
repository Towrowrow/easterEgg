import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eggs from './Eggs';
import Monsters from './Monsters';
import Actions from './actions';
import NameModal from './Modal';
import { Route, Switch } from 'react-router-dom';
import Intro from "./intro";
import { NavLink } from 'react-router-dom';
import lifeEgg from './functions/lifeEgg';
import lifeCharacter from './functions/lifeCharacter';
import DragNDrop from './dragNdropComp/DragNDrop';
import Droppable from './dragNdropComp/Droppable';
import Draggable from './dragNdropComp/Draggable';

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

      // monster state
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

      // battle state
      isWinner: null,

      // console
      chat: ['tutu']

    }
    this.victory = this.victory.bind(this);
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

  onChangeModal = (event) => {
    const { name, value } = event.target;
    this.setState({
      userName: `${event.target.value}`,
      welcomeMessage: `Welcome ${event.target.value}`,
      [name]: value
    }, () => console.log(`test ${this.state.userName}`));

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.powerEgg !== this.state.powerEgg) {
      this.setState({ lifeEgg: lifeEgg(this.state.powerEgg) })
    }
    if (prevState.skillsMonster !== this.state.skillsMonster) {
      this.setState({ lifeMonster: lifeCharacter(this.state.skillsMonster) })
    }

    if ((prevState.isWinner !== this.state.isWinner) && (this.state.isWinner === true)) {
      this.apiMonster()
      this.setState({ isWinner: null })
    } else if ((prevState.isWinner !== this.state.isWinner) && (this.state.isWinner === false)) {
      this.apiEggs()
      this.setState({ isWinner: null })
    }
  }

  victory(egg, monster) {
    if (egg >= monster) {
      this.setState(prevState => {
        return {
          isWinner: true,
          chat: prevState.chat.concat(["loose"])
        }

      }, () => console.log(`test ${this.state.userName}`))

    } else {
      this.setState(prevState => {
        return {
          isWinner: false,
          chat: prevState.chat.concat(["winner"])
        }

      }, () => console.log(`test ${this.state.userName}`))
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
          onChange={this.onChangeModal}
        />


        <header className="App-header">
          <div className="d-flex align-items-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="d-flex">
              <Droppable id="dr1">
              </Droppable>
              <p>Omelette wars&lsaquo;/h1&rsaquo;</p>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <Droppable id="dr2">
              <Draggable id="item1">
                <div>&lsaquo;h1&rsaquo;</div>
              </Draggable>
            </Droppable>
          </div>

        </header>
        <h2> {this.state.welcomeMessage}</h2>
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
              lifeEgg={this.state.lifeEgg}
              lifeMonster={this.state.lifeMonster}
              victory={this.victory}
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


            <Switch>
              <Route exact path="/generique" component={Intro} />}
            </Switch>

            <NavLink to={`/generique`} >

              <button>Générique</button>

            </NavLink>

          </div>

        </div>

      </div >
    );
  }
}

export default App;
