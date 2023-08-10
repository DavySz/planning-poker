import { IUserModel } from "@domain/models";

export interface IUpdateUserDTO {
  user: IUserModel;
  userKey: string;
  room: string;
}
