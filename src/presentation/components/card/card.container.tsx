import { ICard } from "./card.types";
import { CardUI } from "./card.ui";

export const Card: React.FC<ICard> = ({ visible, option }) => {
  return <CardUI visible={visible} option={option} />;
};
