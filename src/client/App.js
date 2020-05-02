import React, { useState, useEffect, useRef } from 'react';
import { usePersistentCanvas } from './hooks';
import './App.css';

// our first custom hook!

const App = () => {
  const [locations, setLocations, canvasRef] = usePersistentCanvas();

  const handleCanvasClick = e => {
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  };

  const handleClear = () => {
    setLocations([]);
  };

  const handleUndo = () => {
    setLocations(locations.slice(0, -1));
  };

  console.log(locations);
  return (
    <>
      <div className="controls">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleUndo}>Undo</button>
      </div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleCanvasClick}
      />
    </>
  );
};

// This can be expanded to use state for locations, and functions to draw objects
// State holds x,y coords to draw objects defined in functions

export default App;
