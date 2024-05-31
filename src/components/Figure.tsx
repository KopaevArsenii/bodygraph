// src/components/Node.tsx
import React from 'react';
import Point from './Point.tsx';

interface NodeProps {
  points: { x: number, y: number }[];
}

const Figure: React.FC<NodeProps> = ({ points }) => {
  // Преобразуем массив координат в строку формата "x1,y1 x2,y2 x3,y3 ..."
  const pointsString = points.map(point => `${point.x},${point.y}`).join(' ');

  return (
    <g>
      <polygon points={pointsString} fill="grey" />
      <Point value="1" coordinate={{ x: 0, y: 0}} />
    </g>
  );
};

export default Figure;
