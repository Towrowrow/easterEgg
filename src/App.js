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
      disabled: false
    }
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
            <Monsters name='monster' />
          </div>
        </div>

      </div >
    );
  }
}

export default App;
