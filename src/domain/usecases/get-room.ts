import { IGetRoomModel } from "@domain/models/get-room";

export namespace GetRoomSpace {
  type TGetRoomParams = {
    room: string;
  };

  export type Params = TGetRoomParams;
  export type Model = IGetRoomModel;
}

export interface GetRoom {
  get: (params: GetRoomSpace.Params) => Promise<GetRoomSpace.Model>;
}
