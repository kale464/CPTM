
import type { UpgradeData } from "../types"

export const upgrades: UpgradeData[]  = [
    {
        id: 'autoclicker',
        name: 'Auto Clicker',
        description: 'Ajoute 1 cookie par seconde',
        type: 'repeatable',
        baseCost: 100,
        getCost: (level) => 100 * Math.pow(1.15, level), // prix augmente de 15% à chaque achat
        getEffect: (level, state) => ({
        autoCookies: state.autoCookies + 0.1
        })
    }
]