import { useContext } from 'react';

import { GameContext } from '../contexts/gameContext';

export default function Square({value, index}) {
    const {square, setSquare, isXNext, setIsXNext, whoIsWinner } = useContext(GameContext);

    function handleClick() {
        if (square[index]) return;
        if (whoIsWinner) return;

        const newSquare = [... square];
        newSquare[index] = isXNext ? 'X' : 'O';
        setSquare(newSquare);
        setIsXNext(!isXNext);
    }

    return (
        <button type='button' onClick={handleClick}>
            {value}
        </button>
    )
}
