import { IUserModel } from "@domain/models";

export interface ICreateRoomDTO {
  room: string;
  voting: string;
  user: IUserModel;
}
