import { IListenerDatabase } from "@data/database";
import {
  ref,
  onValue,
  getDatabase,
  DatabaseReference,
} from "firebase/database";

export class FirebaseListenerAdapter implements IListenerDatabase {
  private readonly database = getDatabase();

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
