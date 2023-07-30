import { IButton } from "./button.types";

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="font-semibold text-white px-8 py-4 bg-blue-600 rounded-xl hover:opacity-80"
    >
      {children}
    </button>
  );
};
