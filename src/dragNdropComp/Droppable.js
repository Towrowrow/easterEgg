import React, { Component } from 'react';
import PropTypes from 'prop-types';

const droppableStyle = {
  backgroundColor: '#282C45',
  width: '45px',
  height: '35px',
  margin: '2px'
};

class Droppable extends Component {

  drop = (event) => {
    // 
    console.log(event);
    const data = event.dataTransfer.getData('transfer');
    event.target.appendChild(document.getElementById(data));
  }

  allowDrop = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.allowDrop}
        style={droppableStyle}
      >
        {this.props.children}
      </div>
    );
  }
}

Droppable.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Droppable;