import { ISelectCard } from "./select-card.types";
import { SelectCardUI } from "./select-card.ui";

export const SelectCard: React.FC<ISelectCard> = ({
  option,
  onClick,
  isSelected,
}) => {
  return (
    <SelectCardUI option={option} isSelected={isSelected} onClick={onClick} />
  );
};
