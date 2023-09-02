import { IPushDatabase } from "@data/database";
import { CreateRoom, CreateRoomSpace } from "@domain/usecases";

export class RemoteCreateRoom implements CreateRoom {
  constructor(private readonly pushDatabase: IPushDatabase) {}

  async create(params: CreateRoomSpace.Params): Promise<CreateRoomSpace.Model> {
    const { key } = await this.pushDatabase.push(params.room, "rooms");
    return key;
  }
}
