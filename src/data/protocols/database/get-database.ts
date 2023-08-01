export interface IGetDatabase {
  get: (path: string, callback: (data: any) => void) => Promise<void>;
}
