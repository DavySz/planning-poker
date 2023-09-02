import { IDatabase } from "@data/database";
import { CreateRoom, CreateRoomSpace } from "@domain/usecases";

export class RemoteCreateRoom implements CreateRoom {
  constructor(private readonly database: IDatabase) {}

  async create(params: CreateRoomSpace.Params): Promise<CreateRoomSpace.Model> {
    const { key } = await this.database.push(params.room, "rooms");
    return key;
  }
}
