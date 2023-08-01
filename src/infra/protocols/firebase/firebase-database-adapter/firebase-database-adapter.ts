import {
  IGetDatabase,
  ISetDatabase,
  IPushDatabase,
} from "@data/protocols/database";
import {
  ref,
  onValue,
  getDatabase,
  set as setFirebase,
  push as pushFirebase,
} from "firebase/database";

export class FirebaseDatabaseAdapter
  implements ISetDatabase, IGetDatabase, IPushDatabase
{
  async set(data: any, path: string): Promise<void> {
    const database = getDatabase();
    const databaseRef = ref(database, path);
    await setFirebase(databaseRef, data);
  }

  async get(path: string, callback: (data: any) => void): Promise<any> {
    const database = getDatabase();
    const databaseRef = ref(database, path);
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });
  }

  async push(data: any, path: string): Promise<string> {
    const database = getDatabase();
    const databaseRef = ref(database, path);
    const response = await pushFirebase(databaseRef, data);
    return response.key!;
  }
}
