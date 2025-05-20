import {useContext, useEffect} from 'react';
import './App.css';
import { GameContext, GameContextType } from './hooks/gamecontext';
import Upgrade from './upgrade';
import saveGame from "./util/save.ts";

export default function App() {
  const context = useContext(GameContext) as GameContextType;

  useEffect(() => {
    const saveInterval = setInterval(() => {
      saveGame(context);
    }, 1000)

    return () => {
      clearInterval(saveInterval);
    }
  });

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
                <button className="cookie-button" onClick={context.click} onKeyDown={(e) => e.preventDefault()}>
                  🍪
                </button>
                <p>Avis d'abscences: {Math.trunc(context.cookies)}</p>
                <p>Par seconde : {context.autoCookies.toFixed(1)}</p>
              </div>

              <div className="upgrades-panel">
                <h2>Améliorations</h2>
                {
                  context.upgrades.map((value, index) => value.getType() === "upgrade" && <Upgrade upgrade={value} key={index}></Upgrade>)
                }
              </div>
            </div>

            <div className="structures-panel">
              <h2>Structures</h2>
                {
                  context.upgrades.map((value, index) => value.getType() === "autoclicker" && <Upgrade upgrade={value} key={index}></Upgrade>)
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
