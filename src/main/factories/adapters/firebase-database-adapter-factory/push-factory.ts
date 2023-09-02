import { IPushDatabase } from "@data/database";
import { FirebasePushAdapter } from "@infra/database/firebase";

export const makeFirebasePushAdapter = (): IPushDatabase => {
  return new FirebasePushAdapter();
};
