export interface God {
  id: number;
  name: string;
  thumbnail: string;
  build?: Array<Build>;
}

export interface Item {
  id: number;
  name: string;
  thumbnail: string;
}

export interface Build {
  id: number;
  starter: Array<Item>;
  core: Array<Item>;
  situational: Array<SitTabs>;
  relics: Array<Item>;
}

export interface SitTabs {
  name: String;
  items: Array<Item>;
}

export interface GlobalState {
  isSavedGods: Boolean;
  selectedGod: number;
  savedGodsList: Array<God>;
}

export interface BuildState {
  buildSection: number;
}
