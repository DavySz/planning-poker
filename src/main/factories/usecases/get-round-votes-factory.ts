import { RemoteGetRoundVotes } from "@data/usecases";
import { GetRoundVotes } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";

export const makeGetRoundVotes = (): GetRoundVotes => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteGetRoundVotes(database);
};
