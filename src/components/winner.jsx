import React, { useContext } from 'react';

import { GameContext } from '../contexts/gameContext';

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <p className="winner">'{whoIsWinner}' ganhou!!!</p>;
}