import React from 'react';
import Heal from './heal'
import Attack from './attack';



const Actions = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <Heal
          monsterName={props.monsterName}
          nameEgg={props.nameEgg}
          healProps={props.healProps}
          disabled={props.disabled}
          heal={props.chat}
        />
        <Attack
          eggs={props.lifeEgg}
          monsters={props.lifeMonster}
          victory={props.victory} />
      </div>
    </div>
  </div>

);



export default Actions;