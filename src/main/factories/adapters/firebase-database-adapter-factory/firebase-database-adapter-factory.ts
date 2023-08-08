import { FirebaseDatabaseAdapter } from "@infra/protocols/firebase/firebase-database-adapter/firebase-database-adapter";

export const makeFirebaseDatabaseAdapter = (): FirebaseDatabaseAdapter => {
  return new FirebaseDatabaseAdapter();
};
