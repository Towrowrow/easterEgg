import React, { Component } from 'react';
import Droppable from './Droppable';
import Draggable from './Draggable';

const wrapperStyle = {
  width: '100%',
  padding: '2px',
  justifyContent: 'center',
  display: "inline-block"
};

class DragNDrop extends Component {
  render() {
    return (
      <span
        style={wrapperStyle}
      >
        <Droppable id="dr1">
          <Draggable id="item1">
            <div>&lsaquo;h1&rsaquo;</div>
          </Draggable>
        </Droppable>
        <Droppable id="dr2">
        </Droppable>
      </span>
    );
  }
}

export default DragNDrop;