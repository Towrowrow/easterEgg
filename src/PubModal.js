import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class PubModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        width="500"
        height="200"
        effect="fadeInUp">
        <form>
          <h1 className="blink">Félicitation !! </h1>
          <h3>Vous êtes le 100 000 000 visiteur</h3>
          <div className="input-group mb-3">
          </div>
          <button
            style={{
              backgroundColor: "yellow",
              color: "red"
            }}
            type="button"
            className="btn btn-outline-secondary"
          >
            Cliquez ici pour gagner un Iphone 12
          </button>
        </form>
      </Modal >

    );
  }
}

export default PubModal;