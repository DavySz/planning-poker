import { Button } from "../button/button";
import { IHeader } from "./header.types";

export const Header: React.FC<IHeader> = ({
  label,
  onClick,
  customComponent,
}) => {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex items-center">
        <h1 className="font-mono font-semibold text-4xl text-blue-600 ml-4">
          Planning Poker
        </h1>
      </div>
      {customComponent && customComponent}
      {onClick && <Button onClick={onClick}>{label}</Button>}
    </div>
  );
};
