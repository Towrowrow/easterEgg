import React, { Component } from 'react';
import Droppable from './Droppable';
import Draggable from './Draggable';

const wrapperStyle = {
  width: '100%',
  padding: '2px',
  display: 'flex',
  justifyContent: 'center'
};

class DragNDrop extends Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <Droppable id="dr1">
          <Draggable id="item1">
            <div>&lsaquo;h1&rsaquo;</div>
          </Draggable>
        </Droppable>
        <Droppable id="dr2">
        </Droppable>
      </div>
    );
  }
}

export default DragNDrop;