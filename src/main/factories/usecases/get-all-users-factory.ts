import { GetAllUsers } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import {  RemoteGetAllUsers } from "@data/usecases";

export const makeGetAllUsers = (): GetAllUsers => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteGetAllUsers(database);
};
