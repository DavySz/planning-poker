import { IDatabase } from "@data/database";
import { CreateUser, CreateUserSpace } from "@domain/usecases/create-user";

export class RemoteCreateUser implements CreateUser {
  constructor(private readonly database: IDatabase) {}

  async create({ room, user }: CreateUserSpace.Params): Promise<void> {
    await this.database.push(user, `rooms/${room}/users`);
  }
}
