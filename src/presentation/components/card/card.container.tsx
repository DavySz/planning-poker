import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { CardUI } from "./card.ui";

export const Card = forwardRef((_, ref: any) => {
  const [visible, setVisible] = useState(false);

  const changeVisible = useCallback((value: boolean) => {
    setVisible(value);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      changeVisible,
    };
  });

  return <CardUI visible={visible} ref={ref} />;
});
