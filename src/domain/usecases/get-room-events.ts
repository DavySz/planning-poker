import { IRoomModel } from "@domain/models";

export namespace GetRoomEventsSpace {
  type TGetRoomEventParams = {
    callback: (values: IRoomModel) => void;
    room: string;
  };

  export type Params = TGetRoomEventParams;
}

export interface GetRoomEvents {
  get: (params: GetRoomEventsSpace.Params) => Promise<void>;
}
