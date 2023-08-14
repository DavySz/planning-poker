import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteUpdateAllUsers } from "@data/usecases/update-all-users";
import { UpdateAllUsers } from "@domain/usecases/update-all-users";

export const makeUpdateAllUsers = (): UpdateAllUsers => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteUpdateAllUsers(database);
};
