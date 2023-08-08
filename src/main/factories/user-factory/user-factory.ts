import { IUserModel } from "@domain/models";
import { makeUuidHashAdapter } from "../uuid-hash-adapter-factory/uuid-hash-adapter-factory";

export const makeUser = (name: string, owner: boolean): IUserModel => {
  const id = makeUuidHashAdapter().get();

  return {
    option: {
      isSelected: false,
    },
    owner,
    name,
    id,
  };
};
