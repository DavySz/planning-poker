import { IDatabase } from "@data/protocols/database";
import { GetRoomEvents, GetRoomEventsSpace } from "@domain/usecases";

export class RemoteGetRoomEvents implements GetRoomEvents {
  constructor(private readonly database: IDatabase) {}

  async get({ callback, room }: GetRoomEventsSpace.Params): Promise<void> {
    await this.database.listener(`rooms/${room}`, (roomUpdated) =>
      callback(roomUpdated)
    );
  }
}
