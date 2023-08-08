import { IDatabase } from "@data/protocols/database";
import { GetRoom, GetRoomSpace } from "@domain/usecases";

export class RemoteGetRoom implements GetRoom {
  constructor(private readonly database: IDatabase) {}

  async get(params: GetRoomSpace.Params): Promise<GetRoomSpace.Model> {
    const room = await this.database.get(`rooms/${params.room}`);
    return room;
  }
}
