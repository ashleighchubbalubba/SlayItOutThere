export type GodsListFields = {
  godsList: Array<GodFields>;
};

export type GodFields = {
  name: string;
  thumbnail: string;
  isSelectedGod?: boolean;
};

export type ItemsListFields = {
  itemsList: Array<ItemFields>;
};

export type ItemFields = {
  name: string;
  thumbnail: string;
};