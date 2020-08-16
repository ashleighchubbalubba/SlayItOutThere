export interface GodsListFields {
  godsList: Array<GodFields>;
};

export interface GodFields {
  name: string;
  thumbnail: string;
  isSelectedGod?: boolean;
};

export interface ItemsListFields {
  itemsList: Array<ItemFields>;
};

export interface ItemFields {
  name: string;
  thumbnail: string;
};

//defines the types for the Context Obj
export interface SelectedGodContextType {
  selectedGodState: {
    selectedGod: number;
    setSelectedGod: React.Dispatch<React.SetStateAction<number>>;
  }
}