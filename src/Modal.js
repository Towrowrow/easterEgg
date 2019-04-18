import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class NameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        visible={this.props.visible}
        width="500"
        height="300"
        effect="fadeInUp"
        onClickAway={() => this.props.closeModal}>
        <form>
          <h1>Tell me your beautiful name: </h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={this.props.userName}
              onChange={this.props.onChange}
              name="userName"
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => this.props.submitName()}
          >
            Ok
          </button>
        </form>
      </Modal >


    );
  }
}

export default NameModal;