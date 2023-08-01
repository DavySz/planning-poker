import { UuiHashAdapter } from "@infra/protocols/hash/uuid-hash-adapter";

export const makeUuidHashAdapter = (): UuiHashAdapter => {
  return new UuiHashAdapter();
};
