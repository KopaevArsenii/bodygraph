import React from 'react';

interface NodeProps {
  id: string;
  x: number;
  y: number;
  label: string;
}

const Node: React.FC<NodeProps> = ({ id, x, y, label }) => {
  return (
    <g key={id}>
      <rect x={x} y={y} width="50" height="50" fill="grey" />
      <text x={x + 25} y={y + 25} textAnchor="middle" fill="white">{label}</text>
    </g>
  );
};

export default Node;
