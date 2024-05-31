import React from 'react';
import { Point } from '../types';

interface LineProps {
  from: Point;
  to: Point;
  fromActive: boolean,
  toActive: boolean,
}

const Line: React.FC<LineProps> = ({ from, to, fromActive, toActive }) => {
  const centerX = (from.position.x + to.position.x) / 2;
  const centerY = (from.position.y + to.position.y) / 2;

  return (
    <>
      <line
        x1={from.position.x}
        y1={from.position.y}
        x2={centerX}
        y2={centerY}
        stroke={fromActive ? "blue" : "black"}
        strokeWidth="2"
      >
        <animate
          attributeName="x2"
          from={from.position.x}
          to={centerX}
          dur="1.5s"
          fill="freeze"
        />
        <animate
          attributeName="y2"
          from={from.position.y}
          to={centerY}
          dur="1.5s"
          fill="freeze"
        />
      </line>
      <line
        x1={to.position.x}
        y1={to.position.y}
        x2={centerX}
        y2={centerY}
        stroke={toActive ? "blue" : "black"}
        strokeWidth="2"
      >
        <animate
          attributeName="x2"
          from={to.position.x}
          to={centerX}
          dur="1.5s"
          fill="freeze"
        />
        <animate
          attributeName="y2"
          from={to.position.y}
          to={centerY}
          dur="1.5s"
          fill="freeze"
        />
      </line>
    </>
  );
};

export default Line;