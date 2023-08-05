import { TButtonVariants } from "./button.types";

export const buttonVariants: Record<TButtonVariants, string> = {
  success: "",
  error: "",
  default: "bg-blue-600 text-white",
  loading: "bg-slate-400",
  disabled: "bg-slate-300",
};

export const buttonTextVariants: Record<TButtonVariants, string> = {
  success: "",
  error: "",
  default: "",
  loading: "",
  disabled: "text-slate-400",
};

export const getButtonVariant = (variant: TButtonVariants): string => {
  return buttonVariants[variant];
};

export const getButtonTextVariant = (variant: TButtonVariants): string => {
  return buttonTextVariants[variant];
};
