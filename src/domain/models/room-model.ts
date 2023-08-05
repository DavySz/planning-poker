import { IUserModel } from "./user-model";

export interface IRoomModel {
  cardsVisible: boolean;
  users: IUserModel[];
  roomId: string;
  voting: string;
  room: string;
}
