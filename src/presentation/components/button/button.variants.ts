import { TButtonVariants } from "./button.types";

export const buttonVariants: Record<TButtonVariants, string> = {
  success: "",
  error: "",
  default: "bg-blue-600 text-white",
  loading: "bg-slate-400",
  disabled: "",
};

export const getButtonVariant = (variant: TButtonVariants): string => {
  return buttonVariants[variant];
};
