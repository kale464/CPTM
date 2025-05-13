import { createContext } from "react";
import { GameState, Upgrade } from "../types";

interface GameContextType extends GameState {
    click: () => void;
    setAutoCookies: (current: any) => void;
    setCookiesPerClick: (current: any) => void;
}

export const GameContext = createContext<GameContextType|null>(null);