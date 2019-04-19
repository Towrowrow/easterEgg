import React, { Component } from 'react';
import {
  Animated,
  BounceAnimations
} from "animated-styled-components";



class Attack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: true
    }
    this.cliked = this.cliked.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.animate !== this.state.animate) {
      this.setState({
        animate: true
      })
    }
  }

  cliked() {
    this.props.victory(this.props.eggs, this.props.monsters);
    this.setState({
      animate: false,
    })
  }

  render() {
    return (
      <div className="card mb-3 cardShadow cardAttack" >
        <div className="row no-gutters">

          <div className="col-md-4 align-self-center">
            {this.state.animate ?
              <Animated
                animation={{
                  in: BounceAnimations.BounceInForwards,
                  duration_in: 1
                }}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/1541/1541691.svg"
                  className="card-img my-4 shake" alt="swords"
                  style={{ animation: "shake 0.5s", width: "100px" }}
                />

              </Animated> :
              <img
                src="https://image.flaticon.com/icons/svg/1541/1541691.svg"
                className="card-img my-4 shake" alt="swords"
                style={{ animation: "shake 0.5s", width: "100px" }}
              />
            }
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <p>
                <button
                  onClick={() => this.cliked()}
                  type="button"
                  className="btn btn-dark btn-block mt-5">Attack !
              </button>
              </p>
            </div>
          </div>
        </div>
      </div >
    )
  }
};

export default Attack;