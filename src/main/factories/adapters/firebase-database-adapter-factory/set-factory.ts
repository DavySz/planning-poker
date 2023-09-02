import { ISetDatabase } from "@data/database";
import { FirebaseSetAdapter } from "@infra/database/firebase";

export const makeFirebaseSetAdapter = (): ISetDatabase => {
  return new FirebaseSetAdapter();
};
