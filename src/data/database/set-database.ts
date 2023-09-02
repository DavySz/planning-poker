export interface ISetDatabase {
  set: (data: any, path: string) => Promise<void>;
}
