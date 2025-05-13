
import { useContext } from "react";
import { GameContext, GameContextType } from "./hooks/gamecontext";
import { Upgrade as UpgradeType } from "./types"

interface UpgradeProps {
    upgrade: UpgradeType
}

export default function Upgrade({ upgrade }: UpgradeProps) {
    const context = useContext(GameContext) as GameContextType;

    if (context.cookies >= upgrade.getCost()) {
        upgrade.discover();
    }

    return (
        <div onClick={() => { upgrade.getCost() <= context.cookies && upgrade.buy(context.setCookies, context) }}>
            <h4>{ upgrade.isDiscovered() ? upgrade.getName() : "Psartek c'est quoi?" }</h4>
            <p>Description : {upgrade.getDescription()}</p>
            <p>{ upgrade.getCost() }</p>
        </div>
    )
}