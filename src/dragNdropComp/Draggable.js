import React, { Component } from 'react';
import PropTypes from 'prop-types';

const draggableStyle = {
  padding: '1px',
  color: '#fff',
  backgroundColor: '#282C34',
  borderRadius: '5px',
  margin: '1px',
  display: "inline-block"
};

class Draggable extends Component {

  drag = (event) => {
    event.dataTransfer.setData('transfer', event.target.id);
  }

  noAllowDrop = (event) => {
    event.stopPropagation();
  }

  render() {
    return (
      <span
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
        style={draggableStyle}
      >
        {this.props.children}
      </span>
    );
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Draggable;