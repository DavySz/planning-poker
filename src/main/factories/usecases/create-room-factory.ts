import { RemoteCreateRoom } from "@data/usecases";
import { CreateRoom } from "@domain/usecases";
import { makeFirebasePushAdapter } from "../adapters";

export const makeRemoteCreateRoom = (): CreateRoom => {
  const pushDatabase = makeFirebasePushAdapter();
  return new RemoteCreateRoom(pushDatabase);
};
