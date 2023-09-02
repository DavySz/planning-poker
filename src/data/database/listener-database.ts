export interface IListenerDatabase {
  listener: (path: string, callback: (data: any) => void) => Promise<any>;
}
