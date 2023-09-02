export interface IGetDatabase {
  get: (path: string) => Promise<any>;
}
