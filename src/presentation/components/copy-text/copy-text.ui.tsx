import { BiCopy } from "react-icons/bi";
import { ICopyTextUI } from "./copy-text.types";

export const CopyTextUI: React.FC<ICopyTextUI> = ({
  value,
  handleCopyToClipBoard,
}) => {
  return (
    <button
      className="flex gap-x-2 rounded-xl items-center justify-center border-2 border-blue-600 hover:opacity-80"
      onClick={handleCopyToClipBoard}
    >
      <span className="ml-2 font-medium text-white">{value}</span>
      <div className="bg-blue-600 rounded-tr-xl rounded-br-xl p-4">
        <BiCopy size={24} color="white" />
      </div>
    </button>
  );
};
