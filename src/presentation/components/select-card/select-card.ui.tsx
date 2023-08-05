import { ISelectCardUI } from "./select-card.types";

export const SelectCardUI: React.FC<ISelectCardUI> = ({
  isSelected,
  onClick,
  option,
}) => {
  const selectedStyle = isSelected
    ? "bg-blue-600 -translate-y-2 transition-translate: duration-500"
    : "";

  const selectedTextStyle = isSelected ? "text-white" : "text-black";

  return (
    <div className="h-20 w-14 cursor-pointer" onClick={onClick}>
      <div
        className={`flex flex-col items-center justify-center w-[100%] h-[100%] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${selectedStyle}`}
      >
        <span className={`${selectedTextStyle} font-medium text-lg`}>
          {option}
        </span>
      </div>
    </div>
  );
};
