import { GetRoomEvents } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteGetRoomEvents } from "@data/usecases";

export const makeGetRoomEvents = (): GetRoomEvents => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteGetRoomEvents(database);
};
