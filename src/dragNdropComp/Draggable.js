import React, { Component } from 'react';
import PropTypes from 'prop-types';

const draggableStyle = {
  padding: '1px',
  color: '#fff',
  backgroundColor: '#282C34',
  borderRadius: '5px',
  margin: '1px'
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
      <div
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.noAllowDrop}
        style={draggableStyle}
      >
        {this.props.children}
      </div>
    );
  }
}

Draggable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Draggable;