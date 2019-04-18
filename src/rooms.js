import React, { Component } from 'react';
import monsters from './monsters'
import './rooms.css';



class Rooms extends Component {
  constructor(props) {
    super(props)
    this.name = this.props.name;
    this.state = {
      name: 'Cactus',
      avatar: 'https://image.flaticon.com/icons/svg/1468/1468049.svg',
      life: 3,
      attack: 2,
      reward: 3
    }
  }
  componentDidMount() {
    this.generateMonster();
  }

  generateMonster = event => {
    const keyArray = Object.keys(monsters);
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    this.setState(monsters[randomKey]);
  };

  render() {
    return (
      <div>
        <div className="card bg-light">
          <img src={this.state.avatar} className="card-img-top monsterImage" alt={this.state.name} />
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <p className="card-text">
              <span className="badge badge-danger">♥ {this.state.life}</span>
            </p>
            <p>
              <span className="badge badge-dark"><img src="https://image.flaticon.com/icons/svg/1614/1614989.svg" className="attackMonster" alt="attack icon" /> {this.state.attack}</span>
            </p>
            <button onClick={event => this.generateMonster(event)} > Un autre monstre ! </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;