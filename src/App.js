import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Eggs from './Eggs';
import Rooms from './rooms';
import Actions from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eggsLife: 10,
      disabled: false
    }
  }

  canIDrink = () => {
    if (this.state.persoGold - 2 < 2) {
      return this.setState({
        disabled: true
      })
    } else {
      return this.setState({
        disabled: false
      })
    }
  }

  drinkPotion = () => {
    return (
      this.setState({
        persoLife: this.state.persoLife + 3,
        persoGold: this.state.persoGold - 2,
      })
    );
  }

  healing = () => {
    this.drinkPotion();
    this.canIDrink();
    return;
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
            <Rooms name='monster' />
          </div>
        </div>

      </div >
    );
  }
}

export default App;
