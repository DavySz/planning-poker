import { ICreateUserDTO } from "@domain/dtos/create-user";
import { IUserModel } from "@domain/models";
import { makeUuidHashAdapter } from "@main/factories/adapters";

export const makeUser = ({ name, owner }: ICreateUserDTO): IUserModel => {
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
