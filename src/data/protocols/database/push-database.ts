export interface IPushDatabase<R = any> {
  push: (data: any, path: string) => Promise<R>;
}
