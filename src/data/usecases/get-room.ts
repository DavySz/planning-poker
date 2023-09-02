import { IGetDatabase } from "@data/database";
import { GetRoom, GetRoomSpace } from "@domain/usecases";

export class RemoteGetRoom implements GetRoom {
  constructor(private readonly getDatabase: IGetDatabase) {}

  async get(params: GetRoomSpace.Params): Promise<GetRoomSpace.Model> {
    const room = await this.getDatabase.get(`rooms/${params.room}`);
    return room;
  }
}
