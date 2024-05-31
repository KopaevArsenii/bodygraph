import React from 'react';
import Figure from './Figure.tsx';

const Diagram: React.FC = () => {
  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    console.log(`Mouse Coordinates: X: ${clientX}, Y: ${clientY}`);
  };

  return (
    <svg style={{ margin: '0 auto' }} width="800" height="800" onMouseMove={handleMouseMove}>
      {/*head*/}
      <Figure points={[{ x: 400, y: 0}, { x: 450, y: 100}, { x: 350, y: 100 }]}/>

      {/*ajna*/}
      <Figure points={[{ x: 350, y: 125}, { x: 450, y: 125}, { x: 400, y: 225 }]}/>

      {/*throat*/}
      <Figure points={[{ x: 350, y: 250}, { x: 450, y: 250}, { x: 450, y: 350 }, { x: 350, y: 350 }]}/>

      {/*G*/}
      <Figure points={[{ x: 325, y: 450}, { x: 400, y: 375 }, { x: 475, y: 450 }, { x: 400, y: 525}]}/>

      {/*sacral*/}
      <Figure points={[{ x: 350, y: 575}, { x: 450, y: 575}, { x: 450, y: 675 }, { x: 350, y: 675 }]}/>

      {/*root*/}
      <Figure points={[{ x: 350, y: 700}, { x: 450, y: 700}, { x: 450, y: 800 }, { x: 350, y: 800 }]}/>

      {/*spleen*/}
      <Figure points={[{ x: 10, y: 550}, { x: 150, y: 625}, { x: 10, y: 700 }]}/>

      {/*solar*/}
      <Figure points={[{ x: 790, y: 550}, { x: 650, y: 625}, { x: 790, y: 700 }]}/>

      {/*heart*/}
      <Figure points={[{ x: 550, y: 475}, { x: 600, y: 575}, { x: 475, y: 550 }]}/>
    </svg>
  );
};

export default Diagram;
