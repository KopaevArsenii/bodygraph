import { FC } from 'react';
import { Coordinate } from '../types';

interface PointProps {
  value: string,
  coordinate: Coordinate,
}

const Point: FC<PointProps> = ({ value, coordinate }) => {
  return <text x={coordinate.x} y={coordinate.y} textAnchor="middle" fill="black">{value}</text>;
}

export default Point;