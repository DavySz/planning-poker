import { UpdateRoom } from "@domain/usecases";
import { RemoteUpdateRoom } from "@data/usecases";
import { makeFirebaseUpdateAdapter } from "../adapters";

export const makeUpdateRoom = (): UpdateRoom => {
  const updateDatabase = makeFirebaseUpdateAdapter();
  return new RemoteUpdateRoom(updateDatabase);
};
