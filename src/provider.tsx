import { useState, useEffect, ReactNode } from "react";
import { GameContext } from "./hooks/gamecontext";
import { upgrades } from "./util/upgrades";

interface GameProviderProps
{
    children: ReactNode;
}

export default function GameProvider({ children }: GameProviderProps ) {
    const [cookies, setCookies] = useState(0);
    const [cookiesPerClick, setCookiesPerClick] = useState(1);
    const [autoCookies, setAutoCookies] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCookies(prev => prev + autoCookies);
      }, 1000);
      return () => clearInterval(interval);
    }, [autoCookies]);
  
    const click = () => setCookies(c => c + cookiesPerClick);
  
    return (
      <GameContext.Provider
        value={{
          setAutoCookies,
          setCookiesPerClick,
          cookies,
          cookiesPerClick,
          autoCookies,
          click,
          upgrades
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };