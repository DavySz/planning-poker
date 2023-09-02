import { IDatabase } from "@data/database";
import { FirebaseDatabaseAdapter } from "@infra/database";

export const makeFirebaseDatabaseAdapter = (): IDatabase => {
  return new FirebaseDatabaseAdapter();
};
