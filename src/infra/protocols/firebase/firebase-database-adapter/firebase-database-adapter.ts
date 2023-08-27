import { IDatabase } from "@data/protocols/database";
import {
  ref,
  onValue,
  getDatabase,
  DataSnapshot,
  DatabaseReference,
  get as getFirebase,
  set as setFirebase,
  push as pushFirebase,
  update as updateFirebase,
} from "firebase/database";

export class FirebaseDatabaseAdapter implements IDatabase {
  private readonly database = getDatabase();

  async push(data: any, path: string): Promise<DatabaseReference> {
    const databaseRef = ref(this.database, path);

    const snapshot = await pushFirebase(databaseRef, data);
    return snapshot;
  }

  async set(data: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);

    await setFirebase(databaseRef, data);
  }

  async get(path: string): Promise<DataSnapshot> {
    const databaseRef = ref(this.database, path);

    const snapshot = await getFirebase(databaseRef);
    return snapshot;
  }

  async update(updates: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);

    await updateFirebase(databaseRef, updates);
  }

  async listener(
    path: string,
    callback: (data: any) => void
  ): Promise<DatabaseReference> {
    const snapshot = ref(this.database, path);

    onValue(snapshot, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });

    return snapshot;
  }
}
