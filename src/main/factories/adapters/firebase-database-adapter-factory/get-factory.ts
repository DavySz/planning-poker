import { IGetDatabase } from "@data/database";
import { FirebaseGetAdapter } from "@infra/database/firebase";

export const makeFirebaseGetAdapter = (): IGetDatabase => {
  return new FirebaseGetAdapter();
};
