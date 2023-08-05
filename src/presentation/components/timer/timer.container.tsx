/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ITimer } from "./timer.types";
import { TimerUI } from "./timer.ui";

export const Timer: React.FC<ITimer> = ({
  onTimeOver,
  initialValue,
  onFinishMessage,
}) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (count === 0 || count < 0) {
      onTimeOver?.();
      return;
    }

    setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <TimerUI count={count} onFinishMessage={onFinishMessage} />
    </div>
  );
};
