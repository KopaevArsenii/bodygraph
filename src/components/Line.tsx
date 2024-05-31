import React from 'react';
import { Coordinate } from '../types';

interface LineProps {
  from: Coordinate;
  to: Coordinate;
}

const Line: React.FC<LineProps> = ({ from, to }) => {
  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke="black"
      strokeWidth="2"
    />
  );
};

export default Line;