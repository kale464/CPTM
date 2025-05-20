import { useContext } from 'react';
import './App.css';
import { GameContext, GameContextType } from './hooks/gamecontext';
import Upgrade from './upgrade';

function App() {
  const { cookies, autoCookies, click, cookiesPerClick, setAutoCookies, setCookiesPerClick, upgrades } = useContext(GameContext) as GameContextType;

  return (
    <div className="app-container">
      <div className="game-layout">
        <div className="main-content">
          <h1>CPTM</h1>
          <div className="main-section">
            <div className="structures-panel">
              <h2>Minijeux</h2>
              <p>À venir dans une future mise à jour...</p>
            </div>

            <div className="center-area">
              <div className="card">
                <button className="cookie-button" onClick={click} onKeyDown={(e) => e.preventDefault()}>
                  🍪
                </button>
                <p>Avis d'abscences: {cookies.toFixed(1)}</p>
                <p>Par seconde : {autoCookies.toFixed(1)}</p>
              </div>

              <div className="upgrades-panel">
                <h2>Améliorations</h2>

                
              </div>
            </div>

            <div className="structures-panel">
              <h2>Structures</h2>
                {
                  upgrades.map((value, index) => <Upgrade upgrade={value} key={index}></Upgrade>)
                }
            </div>
          </div>
        </div>

        <p className="read-the-docs">
          Fait par Pedro Da Gloria Santiago, Leny Bressoud et Kaléa Righini
        </p>
      </div>
    </div>
  );
}

export default App;
