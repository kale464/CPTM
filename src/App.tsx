import { useState } from 'react';
import './App.css';

function App() {
  const [cookies, setCookies] = useState(0);

  const handleCookieClick = () => {
    setCookies(prev => prev + 1);
  };

  return (
    <>
      <h1>CPTM</h1>
      <div className="main-section">
        <div className="structures-panel">
          <h2>Minijeux</h2>
          <p>À venir...</p>
        </div>

        <div className="center-area">
          <div className="card">
            <button className="cookie-button" onClick={handleCookieClick}>
              🍪
            </button>
            <p>Avis d'abscences: {cookies}</p>
          </div>
          <h2>Améliorations</h2>
          <p>No upgrades yet. Stay tuned!</p>
        </div>

        <div className="structures-panel">
          <h2>Structures</h2>
          <p>Pas de structures</p>
        </div>
      </div>

      <p className="read-the-docs">
        Fait par Pedro Da Gloria Santiago, Leny Bressoud et Kaléa Righini
      </p>
    </>
  );
}

export default App;
