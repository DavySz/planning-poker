import { IGetDatabase } from "@data/database";
import {
  ref,
  getDatabase,
  DataSnapshot,
  get as getFirebase,
} from "firebase/database";

export class FirebaseGetAdapter implements IGetDatabase {
  private readonly database = getDatabase();

  async get(path: string): Promise<DataSnapshot> {
    const databaseRef = ref(this.database, path);

    const snapshot = await getFirebase(databaseRef);
    return snapshot;
  }
}
