import { createContext } from "react";
import { GameState, UpgradeData } from "../types";

interface GameContextType extends GameState {
    click: () => void;
    buyUpgrade: (upgrade: UpgradeData) => void;
    upgradeLevels: Record<string, number>; // id -> level
}

export const GameContext = createContext<GameContextType>({ cookies: 0, cookiesPerClick: 1, ownedUpgrades: string[] });