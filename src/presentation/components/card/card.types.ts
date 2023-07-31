import { ForwardedRef } from "react";

export type TCardRef = ForwardedRef<HTMLDivElement>;

export interface ICardUI {
  visible: boolean;
}
