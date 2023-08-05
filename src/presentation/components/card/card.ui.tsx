import { ICardUI } from "./card.types";

export const CardUI: React.FC<ICardUI> = ({ option, visible }) => {
  const cardBehavior = visible ? "[transform:rotateY(180deg)]" : "";
  const cardBackground = option ? "bg-blue-600" : "bg-slate-300";

  return (
    <div className="h-20 w-14">
      <div
        className={`relative w-[100%] h-[100%] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] [transform-style:preserve-3d] transition-transform: duration-1000 ${cardBehavior} ${cardBackground}`}
      >
        <div className="absolute w-[100%] h-[100%] text-white [backface-visibility:hidden]" />
        <div className="absolute w-[100%] h-[100%] flex flex-col items-center justify-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-lg text-white font-medium">{option}</span>
        </div>
      </div>
    </div>
  );
};
