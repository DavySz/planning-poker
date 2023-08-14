export interface IUpdateAllChildren {
  updateFieldForAllChildren: (
    value: any,
    fieldToUpdate: string,
    collectionPath: string
  ) => Promise<void>;
}
