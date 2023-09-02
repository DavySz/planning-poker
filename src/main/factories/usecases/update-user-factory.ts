import { UpdateUser } from "@domain/usecases";
import { RemoteUpdateUser } from "@data/usecases";
import { makeFirebaseUpdateAdapter } from "../adapters";

export const makeUpdateUser = (): UpdateUser => {
  const updateDatabase = makeFirebaseUpdateAdapter();
  return new RemoteUpdateUser(updateDatabase);
};
