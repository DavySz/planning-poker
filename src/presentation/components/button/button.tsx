import clsx from "clsx";
import { IButton } from "./button.types";
import { getButtonVariant } from "./button.variants";
import { Loading } from "../loading/loading";

export const Button: React.FC<IButton> = ({
  variant = "default",
  children,
  full,
  ...rest
}) => {
  const fullWidth = full ? "w-full" : "";

  return (
    <button
      {...rest}
      className={clsx(
        "flex font-semibold p-4 rounded-xl hover:opacity-80 items-center justify-center",
        getButtonVariant(variant),
        fullWidth
      )}
    >
      {variant === "loading" ? <Loading /> : children}
    </button>
  );
};
