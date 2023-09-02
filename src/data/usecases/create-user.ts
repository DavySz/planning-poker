import { IPushDatabase } from "@data/database";
import { CreateUser, CreateUserSpace } from "@domain/usecases/create-user";

export class RemoteCreateUser implements CreateUser {
  constructor(private readonly pushDatabase: IPushDatabase) {}

  async create({ room, user }: CreateUserSpace.Params): Promise<void> {
    await this.pushDatabase.push(user, `rooms/${room}/users`);
  }
}
