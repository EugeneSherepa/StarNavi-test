import { FC } from 'react';
import cn from 'classnames';
import { calculateSquareSize } from '../../utils/helpers';
import './Squares.scss'

interface Props {
  squares: number[];
  activeSquares: number[];
  currentField: number;
  handleSquareClick: (square: number) => void;
}

export const Squares: FC<Props> = ({
  squares,
  activeSquares,
  currentField,
  handleSquareClick,
}) => {
  return (
    <div className="squares">
      {squares.map((square) => (
        <button
          key={square}
          className={cn('squares__square', {
            'squares__square--active': activeSquares.includes(square),
          })}
          style={{
            width: `${calculateSquareSize(500, currentField)}px`,
            height: `${calculateSquareSize(500, currentField)}px`,
          }}
          onClick={() => handleSquareClick(square)}>
          
        </button>
      ))}
    </div>
  );
};