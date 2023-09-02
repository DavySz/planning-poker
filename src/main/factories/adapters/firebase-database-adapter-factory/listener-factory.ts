import { IListenerDatabase } from "@data/database";
import { FirebaseListenerAdapter } from "@infra/database/firebase";

export const makeFirebaseListenerAdapter = (): IListenerDatabase => {
  return new FirebaseListenerAdapter();
};
