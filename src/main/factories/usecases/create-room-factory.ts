import { RemoteCreateRoom } from "@data/usecases";
import { CreateRoom } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";

export const makeRemoteCreateRoom = (): CreateRoom => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteCreateRoom(database);
};
