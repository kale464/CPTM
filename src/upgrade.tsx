import { useContext } from "react";
import { GameContext, GameContextType } from "./hooks/gamecontext";
import { Upgrade as UpgradeType } from "./types";
import "./upgrade.css";

interface UpgradeProps {
  upgrade: UpgradeType;
}

export default function Upgrade({ upgrade }: UpgradeProps) {
  const context = useContext(GameContext) as GameContextType;

  if (context.cookies >= upgrade.getCost()) {
    upgrade.discover();
  }

  const canBuy = upgrade.isDiscovered() && context.cookies >= upgrade.getCost();

  return (
    <div
      className={`upgrade-card ${!canBuy ? "disabled" : ""}`}
      onClick={() => {
        if (canBuy) {
          upgrade.buy(context.setCookies, context);
        }
      }}
    >
      <h4>{upgrade.isDiscovered() ? upgrade.getName() : "???"}</h4>
      <p>Coût : {upgrade.getCost()}</p>
      {
        upgrade.isDiscovered() &&
        <>
            <p>Description : {upgrade.getDescription()}</p>
            <p>Effet : {upgrade.getStringEffect()}</p>
            <p>Niveau : {upgrade.getLevel()}</p>
        </>
      }
    </div>
  );
}
