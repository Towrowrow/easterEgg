import React from 'react';




const Attack = (props) => (

  <div className="cardShadow cardAttack mb-3">
    <div className="row no-gutters">
      <div className="col-md-4 align-self-center">
        <img
          src="https://image.flaticon.com/icons/svg/1541/1541691.svg"
          style={{ animation: "shake 0.5s", width: "100px" }}
          className="card-img my-4" alt="swords"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body ">
          <p>

            <button
              onClick={() => props.victory(props.eggs, props.monsters)}
              type="button"
              className="btn btn-dark btn-block mt-5">
              Attack !
            </button>

          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Attack;