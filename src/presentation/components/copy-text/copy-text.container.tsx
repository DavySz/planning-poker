import { ICopyText } from "./copy-text.types";
import { CopyTextUI } from "./copy-text.ui";

export const CopyText: React.FC<ICopyText> = ({ value }) => {
  const handleCopyToClipBoard = async () => {
    await navigator.clipboard.writeText(value);
  };

  return (
    <CopyTextUI value={value} handleCopyToClipBoard={handleCopyToClipBoard} />
  );
};
