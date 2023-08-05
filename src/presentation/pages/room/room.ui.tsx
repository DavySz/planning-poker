import { Button, Card, Timer } from "@presentation/components";
import { IRoomUI } from "./room.types";
import { SelectCard } from "@presentation/components/select-card/select-card.container";
import _ from "lodash";
import { TButtonVariants } from "@presentation/components/button/button.types";

export const RoomUI: React.FC<IRoomUI> = ({
  cards,
  getVoting,
  showNewGame,
  cardSelected,
  handleSelectCard,
  handleShowNewGame,
  handleUpdateSelection,
  handleUpdateCardsVisible,
}) => {
  const buttonVariant: TButtonVariants =
    cards.cardsVisible && !showNewGame ? "disabled" : "default";

  const renderButtonLabel = () => {
    if (cards.cardsVisible) {
      return (
        <Timer
          initialValue={5}
          onTimeOver={handleShowNewGame}
          onFinishMessage="Start new game"
        />
      );
    }

    return "Reveal cards";
  };

  const renderOptions = () => {
    return getVoting()?.map((item, index) => {
      return (
        <div
          key={item}
          className="flex flex-col"
          onClick={() => handleUpdateSelection(item)}
        >
          <SelectCard
            option={item}
            onClick={() => handleSelectCard(index)}
            isSelected={_.isEqual(index, cardSelected)}
          />
        </div>
      );
    });
  };

  const renderUsers = () => {
    if (!cards.users || cards.users.length === 0) return null;

    return Object.entries(cards.users).map(([key, value]) => {
      return (
        <div
          className="flex flex-col gap-4 items-center justify-center"
          key={key}
        >
          <Card
            visible={cards.cardsVisible}
            option={value.option.optionSelected}
          />
          <span className="text-lg">{value.name}</span>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]">
      <div className="flex gap-4 flex-wrap mb-12">{renderUsers()}</div>
      <div className="flex flex-col items-center justify-center mb-12">
        <span className="mb-8">Choose your card 👇</span>
        <div className="flex gap-4">{renderOptions()}</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button
          disabled={buttonVariant === "disabled"}
          onClick={handleUpdateCardsVisible}
          variant={buttonVariant}
          full
        >
          {renderButtonLabel()}
        </Button>
      </div>
    </div>
  );
};
