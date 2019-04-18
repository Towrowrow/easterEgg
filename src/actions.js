import React from 'react';
import Heal from './heal'
import Attack from './attack';



const Actions = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <Heal
          healing={props.healing}
          disabled={props.disabled}
        />
        <Attack />
      </div>
    </div>
  </div>

);



export default Actions;