import { IUpdateDatabase } from "@data/database";
import { ref, getDatabase, update as updateFirebase } from "firebase/database";

export class FirebaseUpdateAdapter implements IUpdateDatabase {
  private readonly database = getDatabase();

  async update(updates: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);

    await updateFirebase(databaseRef, updates);
  }
}
