import { GetRoom } from "@domain/usecases";
import { makeFirebaseGetAdapter } from "../adapters";
import { RemoteGetRoom } from "@data/usecases";

export const makeRemoteGetRoom = (): GetRoom => {
  const getDatabase = makeFirebaseGetAdapter();
  return new RemoteGetRoom(getDatabase);
};
