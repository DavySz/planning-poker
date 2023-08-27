import { IRoomModel } from "@domain/models";

export namespace StartNewGameSpace {
  type TStartParams = {
    roomId: string;
    room: IRoomModel;
  };

  export type Params = TStartParams;
}

export interface StartNewGame {
  start: (params: StartNewGameSpace.Params) => Promise<void>;
}
