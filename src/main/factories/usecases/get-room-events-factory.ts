import { GetRoomEvents } from "@domain/usecases";
import { makeFirebaseListenerAdapter } from "../adapters";
import { RemoteGetRoomEvents } from "@data/usecases";

export const makeGetRoomEvents = (): GetRoomEvents => {
  const listenerDatabase = makeFirebaseListenerAdapter();
  return new RemoteGetRoomEvents(listenerDatabase);
};
