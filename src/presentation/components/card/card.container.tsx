import { ICard } from "./card.types";
import { CardUI } from "./card.ui";
import _ from "lodash";

export const Card: React.FC<ICard> = ({ visible, option }) => {
  return <CardUI visible={visible} option={option} />;
};
