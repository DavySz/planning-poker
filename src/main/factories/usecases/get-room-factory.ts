import { GetRoom } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteGetRoom } from "@data/usecases/get-room";

export const makeRemoteGetRoom = (): GetRoom => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteGetRoom(database);
};
