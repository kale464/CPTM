import { GameContextType } from "../hooks/gamecontext";

export type GameSave = {
    absences: number;
    auto: number;
    perClick: number;
    upgrades: { "name": string, level: number, discovered: boolean }[];
}

export interface GameState {
    cookies: number;
    cookiesPerClick: number;
    autoCookies: number;
    upgrades: Upgrade[]
}

type UpgradeType = "autoclicker"|"upgrade"
type UpgradeEffect = (upgrade: Upgrade, context: GameContextType) => void; 

export class Upgrade {
    private name: string;
    private description: string;
    private stringEffect: string;
    private type: UpgradeType;
    private cost: number;
    private level: number = 0;
    private discovered: boolean = false;
    public berceuseCps = 0.1;

    private effect: UpgradeEffect

    constructor(name: string, description: string, type: UpgradeType, cost: number, effect: UpgradeEffect, stringeffect: string) {
      this.name = name;
      this.description = description;
      this.stringEffect = stringeffect;
      this.type = type;
      this.cost = cost;
      this.effect = effect;
    }

    public isDiscovered() { return this.discovered }
    public getName() { return this.name; }
    public getDescription() { return this.description; }
    public getType() { return this.type; }
    public getLevel() { return this.level; }
    public getCost() {
      if (this.getType() === "autoclicker") {
        return Math.round(this.cost * Math.pow(1.15, this.level));
      }
      return Math.round(this.cost * Math.pow(10, this.level));
    }
    public getStringEffect() { return this.stringEffect; }

    setLevel(level: number) {
        this.level = level;
    }

    public discover() {
      this.discovered = true;
    }

    public applyEffect(context: GameContextType) {
      return this.effect(this, context);
    }

    public buy(setCookies: (current: any) => void, context: GameContextType) {
      const new_cost = this.getCost();
      setCookies((current: any) => current - new_cost);
      this.level++;
      this.applyEffect(context)
    }
}