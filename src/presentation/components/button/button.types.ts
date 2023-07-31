import { ReactNode } from "react";

export type TButtonVariants =
  | "disabled"
  | "loading"
  | "success"
  | "default"
  | "error";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariants;
  children: ReactNode;
  full?: boolean;
}
