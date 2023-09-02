import { CreateUser } from "@domain/usecases";
import { RemoteCreateUser } from "@data/usecases";
import { makeFirebasePushAdapter } from "../adapters";

export const makeRemoteCreateUser = (): CreateUser => {
  const pushDatabase = makeFirebasePushAdapter();
  return new RemoteCreateUser(pushDatabase);
};
