import { IUpdateDatabase } from "@data/database";
import { UpdateRoom, UpdateRoomSpace } from "@domain/usecases";

export class RemoteUpdateRoom implements UpdateRoom {
  constructor(private readonly updateDatabase: IUpdateDatabase) {}

  async update({ room, roomId }: UpdateRoomSpace.Params): Promise<void> {
    await this.updateDatabase.update(room, `rooms/${roomId}`);
  }
}
