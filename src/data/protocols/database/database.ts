import { IGetDatabase } from "./get-database";
import { ISetDatabase } from "./set-database";
import { IPushDatabase } from "./push-database";

export interface IDatabase extends IGetDatabase, ISetDatabase, IPushDatabase {}
