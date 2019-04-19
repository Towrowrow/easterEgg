import React from 'react';




const Attack = (props) => {


  const cliked = () => {
    return (
      props.victory(props.eggs, props.monsters)
    )

  }

  return (
    <div className="card mb-3" >
      <div className="row no-gutters">
        <div className="col-md-4 align-self-center">
          <img
            src="https://image.flaticon.com/icons/svg/1541/1541691.svg"
            className="card-img my-4 shake" alt="swords"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <p>
              <button
                onClick={() => cliked()}
                type="button"
                className="btn btn-dark btn-block mt-5">Attack !
              </button>
            </p>
          </div>
        </div>
      </div>
    </div >
  )
};

export default Attack;