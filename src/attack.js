import React, { Component } from 'react';
import {
  Animated,
  BounceAnimations
} from "animated-styled-components";


class Attack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false
    }
    this.cliked = this.cliked.bind(this);
  }

  cliked() {
    this.props.victory(this.props.eggs, this.props.monsters);
    this.setState({
      animate: true,
    })
  }

  render() {
    return (
      <div className="card mb-3" >
        <div className="row no-gutters">

          <div className="col-md-4 align-self-center">
            <Animated
              animation={{
                in: BounceAnimations.BounceInForwards,
                duration_in: 1
              }}
            >
              <img
                src="https://image.flaticon.com/icons/svg/1541/1541691.svg"
                className="card-img my-4 shake" alt="swords"
              />

            </Animated>
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