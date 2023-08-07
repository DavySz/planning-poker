import {
  IGetDatabase,
  ISetDatabase,
  IPushDatabase,
} from "@data/protocols/database";
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

export class FirebaseDatabaseAdapter
  implements ISetDatabase, IGetDatabase, IPushDatabase
{
  private readonly database = getDatabase();

  async set(data: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);
    await setFirebase(databaseRef, data);
  }

  async lister(
    path: string,
    callback: (data: any) => void
  ): Promise<DatabaseReference> {
    const databaseRef = ref(this.database, path);
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });

    return databaseRef;
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

  async update(updates: any, path: string): Promise<void> {
    const databaseRef = ref(this.database, path);
    await updateFirebase(databaseRef, updates);
  }

  async updateFieldForAllChildren(
    newValue: any,
    fieldToUpdate: string,
    collectionPath: string
  ): Promise<void> {
    const databaseRef = ref(this.database, collectionPath);
    const snapshot = await getFirebase(databaseRef);

    if (snapshot.exists()) {
      const allChildrenData = snapshot.val();

      Object.keys(allChildrenData).forEach(async (childKey) => {
        const childRef = ref(this.database, `${collectionPath}/${childKey}`);
        const updates = {
          [fieldToUpdate]: newValue,
        };

        await updateFirebase(childRef, updates);
      });
    }
  }
}
