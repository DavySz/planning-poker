import { ICreateUserDTO } from "@domain/dtos/create-user";
import { IUserModel } from "@domain/models";
import { makeUuidGetHashAdapter } from "@main/factories/adapters";

export const makeUser = ({ name, owner }: ICreateUserDTO): IUserModel => {
  const id = makeUuidGetHashAdapter().get();

  return {
    option: {
      isSelected: false,
    },
    owner,
    name,
    id,
  };
};
