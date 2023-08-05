import { ITimerUI } from "./timer.types";

export const TimerUI: React.FC<ITimerUI> = ({ count, onFinishMessage }) => {
  const displayCount = () => {
    if (count === 0 || (count < 0 && onFinishMessage)) {
      return onFinishMessage;
    } else {
      return count;
    }
  };

  return (
    <div>
      <span>{displayCount()}</span>
    </div>
  );
};
