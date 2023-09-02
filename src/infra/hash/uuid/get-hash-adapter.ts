import { IGetHash } from "@data/hash";
import { v4 } from "uuid";

export class UuiGetHashAdapter implements IGetHash {
  get() {
    return v4();
  }
}
