import { IUserModel } from "@domain/models";

export namespace GetAllUsersSpace {
  export type Model = IUserModel[];
}

export interface GetAllUsers {
  get: (room: string) => Promise<GetAllUsersSpace.Model>;
}
