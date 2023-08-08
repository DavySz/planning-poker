import { CreateUser } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteCreateUser } from "@data/usecases/create-user";

export const makeRemoteCreateUser = (): CreateUser => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteCreateUser(database);
};
