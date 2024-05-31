import React from 'react';
import { Point } from '../types';

interface LineProps {
  from: Point;
  to: Point;
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