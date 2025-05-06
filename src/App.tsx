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
      <div className="card">
        <button className="cookie-button" onClick={handleCookieClick}>
          🍪
        </button>
        <p>Total CPTM Cookies: {cookies}</p>
      </div>
      <div className="upgrades">
        <h2>Upgrades</h2>
        <p>No upgrades yet. Stay tuned!</p>
      </div>
      <p className="read-the-docs">
        Made with ❤️ with Pedro Da Gloria Santiago, Leny Bressoud and Kaléa Righini
      </p>
    </>
  );
}

export default App;
