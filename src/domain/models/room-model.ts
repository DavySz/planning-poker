import { IUserModel } from "./user-model";

export interface IRoomModel {
  user: IUserModel;
  roomId: string;
  voting: string;
  room: string;
}
