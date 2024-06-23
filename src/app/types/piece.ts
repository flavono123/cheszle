export type Position = {
  x: number;
  y: number;
};

export type Piece = {
  name: string; // id, should be unique
  type: 'knight'; // HACK: ItemType.KNIGHT;
  position: Position;
};
