import { IUserModel } from "@domain/models";

export namespace CreateUserSpace {
  export type Params = {
    user: IUserModel;
    room: string;
  };
}

export interface CreateUser {
  create: (params: CreateUserSpace.Params) => Promise<void>;
}
