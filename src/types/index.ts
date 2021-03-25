export interface God {
  id: number;
  name: string;
  thumbnail: string;
  build: Array<number>;
}

export interface Item {
  id: number;
  name: string;
  thumbnail: string;
}

export interface Build {
  id: number;
  starter: Array<number>;
  core: Array<number>;
  situational: Array<SitTabs>;
  relics: Array<Item>;
}

export interface SitTabs {
  name: String;
  items: Array<number>;
}

export interface GlobalState {
  isSavedGods: Boolean;
  selectedGod: number;
  isDisplay: Boolean;
}

export interface BuildPageState {
  buildGridItems: Array<Item>;
  selectedItem?: number;
}

export interface BuildState {
  buildSection: number;
}
