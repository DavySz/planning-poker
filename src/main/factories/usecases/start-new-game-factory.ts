import { StartNewGame } from "@domain/usecases";
import { makeFirebaseDatabaseAdapter } from "../adapters";
import { RemoteStartNewGame } from "@data/usecases/start-new-game";

export const makeStartNewGame = (): StartNewGame => {
  const database = makeFirebaseDatabaseAdapter();
  return new RemoteStartNewGame(database);
};
