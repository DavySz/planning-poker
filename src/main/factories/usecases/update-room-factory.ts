import { UpdateRoom } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteUpdateRoom } from "@data/usecases";

export const makeUpdateRoom = (): UpdateRoom => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteUpdateRoom(database);
};
