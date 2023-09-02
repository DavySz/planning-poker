import { GetAllUsers } from "@domain/usecases";
import { RemoteGetAllUsers } from "@data/usecases";
import { makeFirebaseGetAdapter } from "../adapters";

export const makeGetAllUsers = (): GetAllUsers => {
  const getDatabase = makeFirebaseGetAdapter();
  return new RemoteGetAllUsers(getDatabase);
};
