export type Position = {
  x: number;
  y: number;
};

type PieceType = 'knight' | 'bishop' | 'rook';
export type PieceColor = 'black' | 'white';

export type Piece = {
  name: string; // id, should be unique
  type: PieceType; // HACK: ItemType.KNIGHT;
  color: PieceColor;
  position: Position;
}
