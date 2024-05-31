import React from 'react';
import Node from './Node';
import Connection from './Connection';

const Diagram: React.FC = () => {
  return (
    <svg width="800" height="600">
      {/* Nodes */}
      <Node id="head" x={375} y={50} label="head" />
      <Node id="ajna" x={375} y={150} label="ajna" />
      <Node id="throat" x={375} y={250} label="throat" />
      <Node id="G" x={375} y={350} label="G" />
      <Node id="heart" x={500} y={350} label="heart" />
      <Node id="spleen" x={250} y={450} label="spleen" />
      <Node id="solar" x={500} y={450} label="solar" />
      <Node id="root" x={375} y={550} label="root" />
      <Node id="sacral" x={375} y={450} label="sacral" />

      {/* Connections */}
      <Connection x1={400} y1={100} x2={400} y2={150} />
      <Connection x1={400} y1={200} x2={400} y2={250} />
      <Connection x1={400} y1={300} x2={400} y2={350} />
      <Connection x1={400} y1={400} x2={400} y2={450} />
      <Connection x1={400} y1={500} x2={400} y2={550} />
      <Connection x1={400} y1={350} x2={525} y2={350} />
      <Connection x1={400} y1={450} x2={275} y2={450} />
      <Connection x1={400} y1={450} x2={525} y2={450} />
    </svg>
  );
};

export default Diagram;
