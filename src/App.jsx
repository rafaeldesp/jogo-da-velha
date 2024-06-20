import GameContextProvider from './contexts/gameContext';
import Board from './components/board';
import './app.css'


function App() {
  return (
    <>
      <div>
        <GameContextProvider>
          <Board/>
        </GameContextProvider>
      </div>
    </>
  )
};

export default App