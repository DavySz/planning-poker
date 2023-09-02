import { IGetDatabase } from "@data/database";
import { GetAllUsers, GetAllUsersSpace } from "@domain/usecases";

export class RemoteGetAllUsers implements GetAllUsers {
  constructor(private readonly getDatabase: IGetDatabase) {}

  async get(room: string): Promise<GetAllUsersSpace.Model> {
    const user = await this.getDatabase.get(`rooms/${room}/users`);
    return user.val();
  }
}
