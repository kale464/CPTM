import { useState, useEffect, ReactNode } from "react";
import { GameContext } from "./hooks/gamecontext";
import { GameState, UpgradeData } from "./types";

interface GameProviderProps
{
    children: ReactNode;
}

export default function GameProvider({ children }: GameProviderProps ) {
    const [cookies, setCookies] = useState(0);
    const [cookiesPerClick, setCookiesPerClick] = useState(1);
    const [autoCookies, setAutoCookies] = useState(0);
    const [upgradeLevels, setUpgradeLevels] = useState<Record<string, number>>({});
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCookies(prev => prev + autoCookies);
      }, 1000);
      return () => clearInterval(interval);
    }, [autoCookies]);
  
    const click = () => setCookies(c => c + cookiesPerClick);
  
    const buyUpgrade = (upgrade: UpgradeData) => {
      const level = upgradeLevels[upgrade.id] ?? 0;
  
      let cost = upgrade.type === 'repeatable'
        ? Math.floor(upgrade.getCost(level))
        : upgrade.baseCost;
  
      if (cookies < cost) return;
  
      // Retirer cookies
      setCookies(c => c - cost);
  
      // Appliquer l'effet
      let newState: Partial<GameState> = {};
      if (upgrade.type === 'single') {
        if (level >= 1) return; // déjà acheté
        newState = upgrade.effect({ cookies, cookiesPerClick, autoCookies });
      } else {
        newState = upgrade.getEffect(level, { cookies, cookiesPerClick, autoCookies });
      }
  
      if (newState.cookiesPerClick !== undefined) setCookiesPerClick(newState.cookiesPerClick);
      if (newState.autoCookies !== undefined) setAutoCookies(newState.autoCookies);
  
      // Mettre à jour le niveau d’upgrade
      setUpgradeLevels(prev => ({
        ...prev,
        [upgrade.id]: level + 1
      }));
    };
  
    return (
      <GameContext.Provider
        value={{
          cookies,
          cookiesPerClick,
          autoCookies,
          click,
          buyUpgrade,
          upgradeLevels
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };