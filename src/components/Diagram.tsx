import React from 'react';
import Figure from './Figure.tsx';
import { figures, lines, points } from '../constants/figures.ts';
import Line from './Line.tsx';
import Gate from './Gate.tsx';

const Diagram: React.FC = () => {
  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    console.log(`Mouse Coordinates: X: ${clientX}, Y: ${clientY}`);
  };

  return (
    <svg width="800" height="800" onMouseMove={handleMouseMove}>
      {lines.map((line) => {
        const formPoint = points.find((point) => point.value === line.form);
        const toPoint = points.find((point) => point.value === line.to);
        return  formPoint && toPoint ? <Line from={formPoint} to={toPoint} /> : null;
      })}
      {figures.map((figure) => <Figure points={figure} />)}
      {points.map((point) => <Gate gate={point} />)}
    </svg>
  );
};

export default Diagram;
