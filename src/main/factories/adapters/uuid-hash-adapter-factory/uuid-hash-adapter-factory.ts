import { IGetHash } from "@data/hash";
import { UuiHashAdapter } from "@infra/hash";

export const makeUuidHashAdapter = (): IGetHash => {
  return new UuiHashAdapter();
};
