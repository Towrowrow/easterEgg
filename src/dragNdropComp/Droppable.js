import React, { Component } from 'react';
import PropTypes from 'prop-types';

const droppableStyle = {
  backgroundColor: '#282C34',
  width: '45px',
  height: '35px',
  margin: '2px',
  display: "inline-block"
};

class Droppable extends Component {

  drop = (event) => {
    this.props.fixCSS();
  }

  allowDrop = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <span
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.allowDrop}
        style={droppableStyle}
      >
        {this.props.children}
      </span>
    );
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Droppable;