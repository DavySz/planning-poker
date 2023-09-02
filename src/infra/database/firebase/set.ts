import { ISetDatabase } from "@data/database";
import { ref, getDatabase, set as setFirebase } from "firebase/database";

export class FirebaseSetAdapter implements ISetDatabase {
  private readonly database = getDatabase();

  async set(data: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);
    await setFirebase(databaseRef, data);
  }
}
