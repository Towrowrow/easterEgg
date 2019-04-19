import React, { Component } from 'react';
import './rooms.css';



class Monster extends Component {






  render() {
    return (
      <div >
        {this.props.nameMonster &&
          <div className="cardShadow card bg-light">
            <img src={this.props.imageMonster} className="card-img-top monsterImage" alt={this.props.nameMonster} />
            <div className="card-body">
              <h5 className="card-title">{this.props.nameMonster}</h5>
              <p className="card-text">
                <span className="badge badge-danger">♥ {this.props.lifeMonster}</span>
              </p>
              <p className="card-text">
                <span className="badge badge-danger">Origin :  {this.props.originMonster}</span>
              </p>
              <p className="card-text">
                {/* <span className="badge badge-danger">Species : {this.props.speciesMonster}</span> */}
              </p>

              {this.props.skillsMonster.map(skill =>
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