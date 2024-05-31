import React from 'react';
import { Point } from '../types';

interface LineProps {
  from: Point;
  to: Point;
}

const Line: React.FC<LineProps> = ({ from, to }) => {
  const centerX = (from.position.x + to.position.x) / 2;
  const centerY = (from.position.y + to.position.y) / 2;

  return (
    <>
      <line
        x1={from.position.x}
        y1={from.position.y}
        x2={centerX}
        y2={centerY}
        stroke={from.active ? "blue" : "black"}
        strokeWidth="2"
      />
      <line
        x1={to.position.x}
        y1={to.position.y}
        x2={centerX}
        y2={centerY}
        stroke={to.active ? "blue" : "black"}
        strokeWidth="2"
      />
    </>
  );
};

export default Line;