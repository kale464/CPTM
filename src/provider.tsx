import { useState, useEffect, ReactNode } from "react";
import { GameContext } from "./hooks/gamecontext";
import { upgrades } from "./util/upgrades";
import { GameSave } from "./types";

interface GameProviderProps
{
    children: ReactNode;
}

export default function GameProvider({ children }: GameProviderProps ) {
    const [cookies, setCookies] = useState(0);
    const [cookiesPerClick, setCookiesPerClick] = useState(1);
    const [autoCookies, setAutoCookies] = useState(0);

    useEffect(() => {
        const saveString = localStorage.getItem("cptmsave");

        if (saveString != null) {
            const save = JSON.parse(saveString) as GameSave;

            setAutoCookies(save.auto);
            setCookies(save.absences);
            setCookiesPerClick(save.perClick);

            for (let i = 0; i < upgrades.length; i++) {
                upgrades[i].setLevel(save.upgrades[i].level);
            }
        }
    }, []);
  
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
          upgrades,
          setCookies
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };