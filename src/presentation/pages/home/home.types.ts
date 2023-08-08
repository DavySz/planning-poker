import { ICreateUserDTO } from "@domain/dtos";
import { IUserModel } from "@domain/models";
import { CreateUser, GetRoom } from "@domain/usecases";
import { TPageState } from "@presentation/common/types/page-state";

export interface IHome {
  getRoom: GetRoom;
  createUser: CreateUser;
  createUserModel: (params: ICreateUserDTO) => IUserModel;
}

export interface IHomeUI {
  pageState: TPageState;
  handleJoinInRoom: () => void;
  handleUpdateUserName: (user: string) => void;
  handleUpdateRoomCode: (code: string) => void;
}
