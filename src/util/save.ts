import {GameSave} from "../types";
import {GameContextType} from "../hooks/gamecontext.ts";

export default function saveGame(context: GameContextType) {
    const save: GameSave = {
        perClick: context.cookiesPerClick,
        auto: context.autoCookies,
        absences: context.cookies,
        upgrades: [],
    };

    save.upgrades = context.upgrades.map((value) => ({ name: value.getName(), level: value.getLevel(), discovered: value.isDiscovered() }));

    localStorage.setItem("cptmsave", JSON.stringify(save));
}