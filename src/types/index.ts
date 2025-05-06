
export interface GameState {
    cookies: number;
    cookiesPerClick: number;
    autoCookies: number;
}

export type UpgradeType = 'single' | 'repeatable';

export interface BaseUpgrade {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  type: UpgradeType;
}

export interface RepeatableUpgrade extends BaseUpgrade {
  type: 'repeatable';
  getCost: (level: number) => number;
  getEffect: (level: number, state: GameState) => Partial<GameState>;
}

export interface SingleUpgrade extends BaseUpgrade {
  type: 'single';
  effect: (state: GameState) => Partial<GameState>;
}

export type UpgradeData = RepeatableUpgrade | SingleUpgrade;