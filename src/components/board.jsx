import { useContext, useEffect } from 'react';
import Square from './square';
import Reset from './reset';
import Winner from './winner';
import calculateWinner from '../utils/calculateWinner';

import { GameContext } from '../contexts/gameContext';

export default function Board() {
    const {square, setWhoIsWinner, isXNext} = useContext(GameContext);

    useEffect(() => {
        const winner = calculateWinner(square);
    
        if (winner) {
          setWhoIsWinner(winner);
        }
      }, [ setWhoIsWinner, square ]);

    return (
        <>
            <div className='board-container'>
                <h1 className='player'>Player: {isXNext ? 'X' : 'O'}</h1>
                <Winner />
                <div className='board'>
                    {square.map((value, index) => 
                    <Square value={value} index={index}/>)}
                </div>
            </div>
            <Reset/>
        </>
    )
}