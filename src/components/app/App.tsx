import React, { useState } from 'react';
import Figure from '../Figure.tsx';
import { figures, lines, points } from '../../constants/figures.ts';
import Line from '../Line.tsx';
import Gate from '../Gate.tsx';
import './App.css'

const initialSetValues = ["62", "24", "1", "2", "26", "44", "34", "32", "28", "27", "60", "49", "41"];

const App: React.FC = () => {
  const [, setCounter] = useState<number>(0);
  const updateUi = () => setCounter((prev) => prev + 1);

  const [selectedPoints] = useState<Set<string>>(new Set<string>(initialSetValues));
  // const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  //   const { clientX, clientY } = event;
  //   console.log(`Mouse Coordinates: X: ${clientX}, Y: ${clientY}`);
  // };

  const handleRandom = () => {
    selectedPoints.clear();
    for (let i = 0; i < Math.floor(Math.random() * 30) + 2; i++) {
      selectedPoints.add(Math.floor(Math.random() * 64).toString());
    }
    updateUi();
  }

  return (
    <div className="wrapper">
      <button onClick={handleRandom} className="button">Randomize</button>
      <svg width="800" height="800">
        {lines.map((line) => {
          const formPoint = points.find((point) => point.value === line.form);
          const toPoint = points.find((point) => point.value === line.to);
          return formPoint && toPoint ? <Line from={formPoint} to={toPoint} fromActive={selectedPoints.has(formPoint.value)} toActive={selectedPoints.has(toPoint.value)} /> : null;
        })}
        {figures.map((figure) => <Figure points={figure} />)}
        {points.map((point) => <Gate active={selectedPoints.has(point.value)} gate={point} />)}
      </svg>
    </div>
  );
};

export default App;
