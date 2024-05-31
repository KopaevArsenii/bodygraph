import { FC } from 'react';
import { Point } from '../types';

interface GateProps {
  gate: Point,
}

const Gate: FC<GateProps> = ({ gate }) => {
  const { active, value, position } = gate;
  return <text x={position.x} y={position.y} textAnchor="middle" fill={active ? "white" : "black"}>{value}</text>;
}

export default Gate;