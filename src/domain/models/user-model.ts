export interface IUserModel {
  id: string;
  name: string;
  owner: boolean;
  option: {
    isSelected: boolean;
    optionSelected?: string;
  };
}
