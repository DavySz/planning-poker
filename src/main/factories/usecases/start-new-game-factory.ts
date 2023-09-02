import { StartNewGame } from "@domain/usecases";
import { RemoteStartNewGame } from "@data/usecases/start-new-game";
import { makeFirebaseGetAdapter, makeFirebaseUpdateAdapter } from "../adapters";

export const makeStartNewGame = (): StartNewGame => {
  const updateDatabase = makeFirebaseUpdateAdapter();
  const getDatabase = makeFirebaseGetAdapter();

  return new RemoteStartNewGame(updateDatabase, getDatabase);
};
