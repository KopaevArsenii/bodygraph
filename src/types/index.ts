export type Coordinate = {
  x: number;
  y: number;
}

export type Point = {
  value: string,
  position: Coordinate,
}

export type Line = {
  form: string,
  to: string,
}