import { IRoomModel } from "@domain/models";

export namespace UpdateRoomSpace {
  type TUpdateRoomParams = {
    room: IRoomModel;
    roomId: string;
  };

  export type Params = TUpdateRoomParams;
}

export interface UpdateRoom {
  update: (params: UpdateRoomSpace.Params) => Promise<void>;
}
