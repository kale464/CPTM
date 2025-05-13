
import { Upgrade } from "../types"

function createAutoClicker(name: string, description: string, cost: number, cps: number) {
    return new Upgrade(
        name,
        description,
        "autoclicker",
        cost,
        (upgrade, context) => { context.setAutoCookies((current: number) => current + cps) }
    );
}

export const upgrades: Upgrade[]  = [
    createAutoClicker("Berceuse", "Roduit donne sa théorie", 15, 0.1),
]