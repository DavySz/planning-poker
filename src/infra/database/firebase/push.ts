import { IPushDatabase } from "@data/database";
import {
  ref,
  getDatabase,
  DatabaseReference,
  push as pushFirebase,
} from "firebase/database";

export class FirebasePushAdapter implements IPushDatabase {
  private readonly database = getDatabase();

  async push(data: any, path: string): Promise<DatabaseReference> {
    const databaseRef = ref(this.database, path);
    const snapshot = await pushFirebase(databaseRef, data);
    return snapshot;
  }
}
