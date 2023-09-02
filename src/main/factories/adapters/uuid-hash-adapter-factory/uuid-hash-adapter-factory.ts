import { IGetHash } from "@data/hash";
import { UuiGetHashAdapter } from "@infra/hash";

export const makeUuidGetHashAdapter = (): IGetHash => {
  return new UuiGetHashAdapter();
};
