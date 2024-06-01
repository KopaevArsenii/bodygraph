import React from 'react';
import { Coordinate } from '../../types';

interface FigureProps {
  points: Coordinate[];
}

const Figure: React.FC<FigureProps> = ({ points }) => {
  const pointsString = points.map(point => `${point.x},${point.y}`).join(' ');

  return (
    <g>
      <polygon points={pointsString} fill="grey" />
    </g>
  );
};

export default Figure;
