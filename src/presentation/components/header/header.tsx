import { Button } from "../button/button";
import { IHeader } from "./header.types";

export const Header: React.FC<IHeader> = ({
  label,
  onClick,
  customComponent,
}) => {
  return (
    <div className="flex justify-between items-center p-8 bg-blue-500">
      <h1 className="font-mono font-semibold text-4xl text-white">
        Planning Poker
      </h1>
      {customComponent && customComponent}
      {onClick && <Button onClick={onClick}>{label}</Button>}
    </div>
  );
};
