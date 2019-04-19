import React from 'react';

class Pub extends React.Component {
  render() {
    return (
    <div className="pub mt-3 mb-3 d-flex justify-content-between">
      <div className="image">

      </div>
      <div className="BLINGBLING"><strong>Rencontre les Oeufs durs de ta région </strong><br/><br/>
      Organise des soirées omelettes avec des oeufs <br/>du calibre de ton choix
      </div>
      <div className="majeur">
      <p>Confirme ton âge</p>
      <ul>
          <li  className="mb-6 ">
            je suis majeur
          </li>
          <li  className="mt-3">
            je suis mineur
          </li>
        </ul>
      </div>
      <div>
        <button className="griss">X</button>
      </div>
   </div>
    )
  }
}

export default Pub;