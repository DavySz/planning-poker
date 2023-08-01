import { IUserModel } from "domain/models/user-model";
import { makeUuidHashAdapter } from "../uuid-hash-adapter-factory/uuid-hash-adapter-factory";

export const makeUser = (name: string): IUserModel => {
  const id = makeUuidHashAdapter().get();

  return {
    name,
    id,
  };
};
