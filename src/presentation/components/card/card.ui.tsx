import { forwardRef } from "react";
import { ICardUI, TCardRef } from "./card.types";

export const CardUI = forwardRef((props: ICardUI, ref: TCardRef) => {
  const cardBehavior = props.visible ? "[transform:rotateY(180deg)]" : "";

  return (
    <div className="h-36 w-32" ref={ref}>
      <div
        className={`relative w-[100%] h-[100%] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-blue-600 [transform-style:preserve-3d] transition-transform: duration-1000 ${cardBehavior}`}
      >
        <div className="absolute w-[100%] h-[100%] text-white [backface-visibility:hidden]">
          Front
        </div>
        <div className="absolute w-[100%] h-[100%] text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          Back
        </div>
      </div>
    </div>
  );
});
