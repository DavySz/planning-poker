import { IUpdateDatabase } from "@data/database";
import { FirebaseUpdateAdapter } from "@infra/database/firebase";

export const makeFirebaseUpdateAdapter = (): IUpdateDatabase => {
  return new FirebaseUpdateAdapter();
};
