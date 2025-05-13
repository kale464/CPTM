import { useContext, useEffect } from "react";
import { upgrades } from "./util/upgrades";
import { GameContext, GameContextType } from "./hooks/gamecontext";


export default function Runner() {
    const context = useContext(GameContext) as GameContextType;

    useEffect(() => {
        const interval = setInterval(() => {
            upgrades.forEach(upgrade => upgrade.isDiscovered() && upgrade.applyEffect(context));
        }, 1000);

        return () => clearInterval(interval);
    });

    return null;
}