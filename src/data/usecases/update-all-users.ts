import { IDatabase } from "@data/protocols/database";
import {
  UpdateAllUsers,
  UpdateAllUsersSpace,
} from "@domain/usecases/update-all-users";

export class RemoteUpdateAllUsers implements UpdateAllUsers {
  constructor(private readonly database: IDatabase) {}

  async update({
    field,
    value,
    room,
  }: UpdateAllUsersSpace.Params): Promise<void> {
    const path = `rooms/${room}/users`;

    await this.database.updateFieldForAllChildren(value, field, path);
  }
}
