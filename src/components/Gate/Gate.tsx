import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Point } from '../../types';
import './Gate.css'; // Импортируем CSS файл

interface GateProps {
  active: boolean;
  gate: Point;
}

const Gate: FC<GateProps> = ({ active, gate }) => {
  const { value, position } = gate;
  return (
    <CSSTransition
      in={active}
      timeout={1000}
      classNames="text"
      appear
    >
      <text
        x={position.x}
        y={position.y}
        textAnchor="middle"
        className={active ? 'text-enter-active' : 'text-exit-active'}
      >
        {value}
      </text>
    </CSSTransition>
  );
}

export default Gate;
