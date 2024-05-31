import React from 'react';

interface ConnectionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const Connection: React.FC<ConnectionProps> = ({ x1, y1, x2, y2 }) => {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="blue" strokeWidth="2" />
  );
};

export default Connection;
