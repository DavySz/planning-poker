import { IGetHash } from "@data/hash";
import { v4 } from "uuid";

export class UuiHashAdapter implements IGetHash {
  get() {
    return v4();
  }
}
