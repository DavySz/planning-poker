import { IDatabase } from "@data/protocols/database";
import { UpdateRoom, UpdateRoomSpace } from "@domain/usecases";

export class RemoteUpdateRoom implements UpdateRoom {
  constructor(private readonly database: IDatabase) {}

  async update({ room, roomId }: UpdateRoomSpace.Params): Promise<void> {
    await this.database.update(room, `rooms/${roomId}`);
  }
}
