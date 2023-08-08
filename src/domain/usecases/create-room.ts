import { IRoomModel } from "@domain/models";
import { ICreateRoomModel } from "@domain/models/create-room";

export namespace CreateRoomSpace {
  type TCreateRoomParams = {
    room: IRoomModel;
  };

  export type Params = TCreateRoomParams;
  export type Model = ICreateRoomModel;
}

export interface CreateRoom {
  create: (params: CreateRoomSpace.Params) => Promise<CreateRoomSpace.Model>;
}
