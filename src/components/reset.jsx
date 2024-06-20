import { useContext } from 'react';

import { GameContext } from '../contexts/gameContext';

export default function Reset() {
    const { setSquare, setIsXNext, setWhoIsWinner } = useContext(GameContext);

    function handleClick() {
        setSquare(Array(9).fill(null));
        setIsXNext(true);
        setWhoIsWinner('');
    }

    return (
        <p className="reset">
            <button type='button' onClick={handleClick}>Reiniciar
            </button>
        </p>
    )
}