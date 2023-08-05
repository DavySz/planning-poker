export interface ISelectCard {
  isSelected: boolean;
  onClick: () => void;
  option: string;
}

export interface ISelectCardUI {
  onClick: () => void;
  isSelected: boolean;
  option: string;
}
