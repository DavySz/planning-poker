import { IListenerDatabase } from "@data/database";
import { GetRoomEvents, GetRoomEventsSpace } from "@domain/usecases";

export class RemoteGetRoomEvents implements GetRoomEvents {
  constructor(private readonly listenerDatabase: IListenerDatabase) {}

  async get({ callback, room }: GetRoomEventsSpace.Params): Promise<void> {
    await this.listenerDatabase.listener(`rooms/${room}`, (roomUpdated) =>
      callback(roomUpdated)
    );
  }
}
