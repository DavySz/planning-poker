import { IUpdateUserDTO } from "@domain/dtos/update-user";

export namespace UpdateUserSpace {
  export type Params = IUpdateUserDTO;
}

export interface UpdateUser {
  update: (params: UpdateUserSpace.Params) => Promise<void>;
}
