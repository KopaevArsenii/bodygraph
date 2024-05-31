import React from 'react';
import Figure from './Figure.tsx';
import { figures } from '../constants/figures.ts';

const Diagram: React.FC = () => {
  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    console.log(`Mouse Coordinates: X: ${clientX}, Y: ${clientY}`);
  };

  return (
    <svg style={{ margin: '0 auto' }} width="800" height="800" onMouseMove={handleMouseMove}>
      {figures.map((figure) => <Figure points={figure} />)}
    </svg>
  );
};

export default Diagram;
