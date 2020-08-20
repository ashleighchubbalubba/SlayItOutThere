export interface God {
  id: number;
  name: string;
  thumbnail: string;
  build?: Array<Item>;
}

export interface Item {
  name: string;
  thumbnail: string;
}

export interface GlobalState {
  isSavedGods: Boolean;
  selectedGod: number;
  savedGodsList: Array<God>;
}
