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
import gourou from './images/benoit_superboss.png';
import Droppable from './dragNdropComp/Droppable';
import Draggable from './dragNdropComp/Draggable';
import Pub from './Pub';


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
      chat: [],

      //benoit
      isGourou: false,

      //CSS Break
      breakCSS: true,

      // Winable
      counterWin: 0

    }
    this.victory = this.victory.bind(this);
    this.fixCSS = this.fixCSS.bind(this);
  }

  componentDidMount() {
    this.apiEggs();
    this.apiMonster();
    this.openModal();
  }

  fixCSS() {
    window.loadCSS('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    this.setState({ breakCSS: false });
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
    this.apiEggs()
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
      this.setState({ lifeEgg: lifeEgg(this.state.powerEgg, this.state.isGourou) })
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
    if (this.state.userName === 'benoit') {
      this.setState(prevState => {
        return {
          isWinner: true,
          counterWin: prevState.counterWin + 1,
          chat: ["Victory !", `  SKIPPY WIN AGAIN !!`].concat(prevState.chat)

        }

      })

    } else {
      if (egg >= monster) {
        this.setState(prevState => {
          return {
            isWinner: true,
            counterWin: prevState.counterWin + 1,
            chat: ["Victory !", ` ${this.state.nameMonster} is EGGsterminated !`].concat(prevState.chat)
          }

        })

      } else {
        this.setState(prevState => {
          return {
            isWinner: false,
            chat: ["Fatality !", `${this.state.nameEgg} end in omelet !`].concat(prevState.chat)
          }

        })
      }
    }
  }



  // api calls
  apiEggs() {
    if (this.state.userName === 'benoit') {
      this.setState({
        nameEgg: "Le GRAND GOUROUUU!",
        imageEgg: gourou,
        caliberEgg: "Christ cosmique",
        farmingEgg: "from Bugarache",
        rarityEgg: "Unique",
        powerEgg: "Power: murmure à l'oreille des devices",
        isGourou: true,
      });
    } else {
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
    // Récupération de l'employé via fetch

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

  sayMyName = () => {
    if (this.state.isGourou) {
      return "Ode au grand Gourou !"
    } else {
      return this.state.welcomeMessage;
    }
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
          <span className="d-flex align-items-center">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="d-flex">
              <Droppable id="dr1" fixCSS={this.fixCSS}>
              </Droppable>
              <span>Omelet Wars{this.state.breakCSS && <span>&lsaquo;/h1&rsaquo;</span>}</span>
            </span>
            <img src={logo} className="App-logo" alt="logo" />
            <Droppable id="dr2">
              <Draggable id="item1">
                {this.state.breakCSS && <div>&lsaquo;h1&rsaquo;</div>}
              </Draggable>
            </Droppable>
          </span>

        </header>
        <h2> {this.sayMyName()}</h2>
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
          <div className="col-5">
            <Actions
              monsterName={this.state.nameMonster}
              nameEgg={this.state.nameEgg}
              healProps={this.state.chat}
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
            <NavLink to={`/generique`} > <button>GENERIQUE </button> </NavLink>
            
          </div>
          
        </div>
        <Pub />
      </div >

    );
  }
}

export default App;
