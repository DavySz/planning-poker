export namespace UpdateAllUsersSpace {
  type TUpdateRoomParams = {
    field: string;
    room: string;
    value: any;
  };

  export type Params = TUpdateRoomParams;
}

export interface UpdateAllUsers {
  update: (params: UpdateAllUsersSpace.Params) => Promise<void>;
}
