import React, { useState, useEffect, useRef } from 'react';
import { draw } from './utils';

const usePersistentState = init => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('draw-app')) || init
  );

  useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(value));
  });

  return [value, setValue];
};

const usePersistentCanvas = () => {
  const [locations, setLocations] = usePersistentState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    locations.forEach(location => draw(ctx, location));
  });
  return [locations, setLocations, canvasRef];
};

export { usePersistentCanvas };
