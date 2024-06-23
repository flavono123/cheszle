export type Position = {
  x: number;
  y: number;
};

export type PieceColor = 'black' | 'white';

export type Piece = {
  name: string; // id, should be unique
  type: 'knight'; // HACK: ItemType.KNIGHT;
  color: PieceColor;
  position: Position;
}
