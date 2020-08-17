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
  selectedGod: number;
  godList: Array<God>;
}
