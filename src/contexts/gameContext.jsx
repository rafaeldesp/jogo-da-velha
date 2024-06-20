import React, { createContext, useState } from 'react';
import t from 'prop-types';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState('');

  const state = {
    square,
    setSquare,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: t.node.isRequired,
};