export interface IPushDatabase {
  push: (data: any, path: string) => Promise<string>;
}
