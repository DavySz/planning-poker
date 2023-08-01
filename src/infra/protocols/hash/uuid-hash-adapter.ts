import { IGetHash } from "@data/protocols/hash/get-hash";
import { v4 } from "uuid";
export class UuiHashAdapter implements IGetHash {
  get() {
    return v4();
  }
}
