import { IInput } from "./input.types";

export const Input: React.FC<IInput> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="p-2 border-zinc-300 border-2 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-zinc-300"
    />
  );
};
