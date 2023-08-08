import { IUserModel } from "@domain/models";
import { makeUuidHashAdapter } from "@main/factories/adapters";

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
