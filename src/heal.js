import React, { Component } from 'react';




class Heal extends Component {


  render() {
    return (

      <div className="ChatBox card mb-1"
        style={{ overflowY: "scroll" }}
      >
        <div className="row no-gutters">

          <div className="col-md-12">
            <div className="card-body">
              <h5>ChatBox</h5>
              <p>Press Attack for start</p>
              <p className="card-text ">
                {this.props.healProps.map(game =>
                  <p> {game}</p>

                )}

              </p>
              <p>


              </p>
            </div>
          </div>
        </div>
      </div >

    );
  }
}



export default Heal;