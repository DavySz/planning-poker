import {
  IGetDatabase,
  ISetDatabase,
  IPushDatabase,
} from "@data/protocols/database";
import {
  ref,
  onValue,
  getDatabase,
  get as getFirebase,
  set as setFirebase,
  push as pushFirebase,
  DataSnapshot,
} from "firebase/database";

export class FirebaseDatabaseAdapter
  implements ISetDatabase, IGetDatabase, IPushDatabase
{
  private readonly database = getDatabase();

  async set(data: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);
    await setFirebase(databaseRef, data);
  }

  async lister(path: string, callback: (data: any) => void): Promise<any> {
    const databaseRef = ref(this.database, path);
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });
  }

  async get(path: string): Promise<DataSnapshot> {
    const response = await getFirebase(ref(this.database, path));
    return response;
  }

  async push(data: any, path: string): Promise<string> {
    const databaseRef = ref(this.database, path);
    const response = await pushFirebase(databaseRef, data);
    return response.key!;
  }
}
