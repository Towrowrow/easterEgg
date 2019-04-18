import React, { Component } from 'react';
import './perso.css'
//import Heal from './heal'


class Perso extends Component {
  constructor(props) {
    super(props)
    this.name = 'Your knight';
  }
  render() {
    return (
      <div>
        <div className="card bg-light">
          <img src="https://image.flaticon.com/icons/svg/1126/1126934.svg" class="card-img-top persoImage" alt="Your knight" />
          <div className="card-body">
            <h5 className="card-title">Your knight</h5>
            <p className="card-text">
              <span class="badge badge-danger">♥ {this.props.life}</span>
            </p>
            <p>
              <span class="badge badge-warning">{this.props.gold} PO</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default Perso;