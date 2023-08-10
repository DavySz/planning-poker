import { UpdateUser } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteUpdateUser } from "@data/usecases/update-user";

export const makeUpdateUser = (): UpdateUser => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteUpdateUser(database);
};
