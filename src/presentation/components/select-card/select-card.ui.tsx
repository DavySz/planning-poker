import { ISelectCardUI } from "./select-card.types";

export const SelectCardUI: React.FC<ISelectCardUI> = ({
  isSelected,
  onClick,
  option,
}) => {
  const selectedStyle = isSelected ? "bg-blue-600" : "";

  return (
    <div className="h-20 w-14 cursor-pointer" onClick={onClick}>
      <div
        className={`flex flex-col items-center justify-center w-[100%] h-[100%] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${selectedStyle}`}
      >
        {!isSelected && (
          <span className="text-black font-medium text-lg">{option}</span>
        )}
      </div>
    </div>
  );
};
