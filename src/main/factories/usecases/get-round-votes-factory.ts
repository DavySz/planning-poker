import { RemoteGetRoundVotes } from "@data/usecases";
import { GetRoundVotes } from "@domain/usecases";
import { makeFirebaseGetAdapter } from "../adapters";

export const makeGetRoundVotes = (): GetRoundVotes => {
  const getDatabase = makeFirebaseGetAdapter();
  return new RemoteGetRoundVotes(getDatabase);
};
