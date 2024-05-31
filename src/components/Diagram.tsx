import React from 'react';
import Figure from './Figure.tsx';
import { figures, points } from '../constants/figures.ts';
import Point from './Point.tsx';

const Diagram: React.FC = () => {
  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    console.log(`Mouse Coordinates: X: ${clientX}, Y: ${clientY}`);
  };

  return (
    <svg width="800" height="800" onMouseMove={handleMouseMove}>
      {figures.map((figure) => <Figure points={figure} />)}
      {points.map((point) => <Point value={point.value} coordinate={point.position} />)}
    </svg>
  );
};

export default Diagram;
