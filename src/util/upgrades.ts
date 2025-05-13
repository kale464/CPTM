
import { Upgrade } from "../types"

export const upgrades: Upgrade[]  = [
    new Upgrade(
        "Auto-Clicker",
        "Rajoute 1 cps",
        "upgradeable",
        100,
        () => 100 * Math.pow(1.15, (this as any).level),
        (setAutoCookies: (current: any) => void) => setAutoCookies((current: any) => current + 1 * (this as any).level)
    ),
    
    new Upgrade(
        "Auto-Clicker 2",
        "Rajoute 2 cps",
        "upgradeable",
        200,
        () => 100 * Math.pow(1.15, (this as any).level),
        (setAutoCookies: (current: any) => void) => setAutoCookies((current: any) => current + 5 * (this as any).level)
    ),
]