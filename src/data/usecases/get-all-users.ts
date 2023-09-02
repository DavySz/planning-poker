import { IDatabase } from "@data/database";
import { GetAllUsers, GetAllUsersSpace } from "@domain/usecases";

export class RemoteGetAllUsers implements GetAllUsers {
  constructor(private readonly database: IDatabase) {}

  async get(room: string): Promise<GetAllUsersSpace.Model> {
    const user = await this.database.get(`rooms/${room}/users`);
    return user.val();
  }
}
