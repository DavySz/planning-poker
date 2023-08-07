import { ReactNode } from "react";

export type IHeader = {
  customComponent?: ReactNode;
  onClick?: () => void;
  label?: string;
};
