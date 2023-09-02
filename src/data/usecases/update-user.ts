import { IUpdateDatabase } from "@data/database";
import { IUpdateUserDTO } from "@domain/dtos";
import { UpdateUser } from "@domain/usecases";

export class RemoteUpdateUser implements UpdateUser {
  constructor(private readonly updateDatabase: IUpdateDatabase) {}

  async update({ room, user, userKey }: IUpdateUserDTO): Promise<void> {
    const path = `rooms/${room}/users/${userKey}`;

    await this.updateDatabase.update(user, path);
  }
}
