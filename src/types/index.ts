
export interface GameState {
    cookies: number;
    cookiesPerClick: number;
    autoCookies: number;
    upgrades: Upgrade[]
}

type UpgradeType = "upgradeable"|"unique"

export class Upgrade {
    private name: string;
    private description: string;
    private type: UpgradeType;
    private cost: number;
    private level: number = 0;

    private get_cost_lambda: () => number;
    private get_effect_lambda: (state: any) => any

    constructor(name: string, description: string, type: UpgradeType, cost: number, get_cost: () => number, effect: (state: any) => any) {
      this.name = name;
      this.description = description;
      this.type = type;
      this.cost = cost;
      this.get_cost_lambda = get_cost;
      this.get_effect_lambda = effect;
    }

    private getName() { return this.name; }
    private getDescription() { return this.description; }
    private getType() { return this.type; }
    private getLevel() { return this.level; }


    public getCost() {
      return this.get_cost_lambda.bind(this);
    }

    public getEffect() {
      return this.get_effect_lambda.bind(this);
    }

    public buy(setCookies: (current: any) => void) {
      setCookies((current: any) => current - this.getCost()());
      this.level++;
    }
}