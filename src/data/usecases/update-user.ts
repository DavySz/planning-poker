import { IDatabase } from "@data/database";
import { IUpdateUserDTO } from "@domain/dtos";
import { UpdateUser } from "@domain/usecases";

export class RemoteUpdateUser implements UpdateUser {
  constructor(private readonly database: IDatabase) {}

  async update({ room, user, userKey }: IUpdateUserDTO): Promise<void> {
    const path = `rooms/${room}/users/${userKey}`;

    await this.database.update(user, path);
  }
}
