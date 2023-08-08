import { ICreateRoomDTO, ICreateUserDTO } from "@domain/dtos";
import { IRoomModel, IUserModel } from "@domain/models";
import { CreateRoom } from "@domain/usecases";

import { TPageState } from "@presentation/common/types/page-state";

export interface ICreateRoom {
  createRoom: CreateRoom;
  createUserModel: (params: ICreateUserDTO) => IUserModel;
  createRoomModel: (params: ICreateRoomDTO) => IRoomModel;
}

export interface ICreateRoomUI {
  updateVoting: (value: string) => void;
  updateRoom: (value: string) => void;
  updateName: (value: string) => void;
  handleCreateRoom: () => void;
  pageState: TPageState;
}

export type TRoomForm = {
  voting: string;
  room: string;
  name: string;
};
