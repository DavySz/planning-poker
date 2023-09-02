import { IGetDatabase } from "./get-database";
import { ISetDatabase } from "./set-database";
import { IPushDatabase } from "./push-database";
import { IUpdateDatabase } from "./update-database";
import { IListenerDatabase } from "./listener-database";

export interface IDatabase
  extends IGetDatabase,
    ISetDatabase,
    IPushDatabase,
    IUpdateDatabase,
    IListenerDatabase {}
