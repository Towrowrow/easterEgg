import React, { Component } from 'react';



class Heal extends Component {


  render() {
    return (

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://image.flaticon.com/icons/svg/129/129094.svg" className="card-img my-4" alt="Heal potion" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Potion</h5>
              <p className="card-text ">
                <span className="badge badge-danger mx-1"> ♥ +3</span>
                <span className="badge badge-warning mx-1"> -2 PO</span>
              </p>
              <p>

                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  onClick={this.props.healing}
                  disabled={this.props.disabled}
                >Drink !</button>
              </p>
            </div>
          </div>
        </div>
      </div >

    );
  }
}



export default Heal;