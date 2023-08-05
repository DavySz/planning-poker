import { IUserModel } from "@domain/models/user-model";

export interface IRoomFactory {
  room: string;
  voting: string;
  user: IUserModel;
}
