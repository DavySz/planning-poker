import { Database } from "firebase/database";
import { database } from "infra/firebase/firebase.config";

export const makeDatabase = (): Database => {
  return database;
};
