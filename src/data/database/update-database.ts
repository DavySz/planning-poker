export interface IUpdateDatabase {
  update: (data: any, path: string) => Promise<void>;
}
