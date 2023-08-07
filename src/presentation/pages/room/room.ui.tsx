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
  handleCreateNewGame,
  handleUpdateSelection,
  handleUpdateCardsVisible,
}) => {
  const buttonVariant: TButtonVariants =
    cards.cardsVisible && !showNewGame ? "disabled" : "default";

  const handleSelectOption = (item: string, index: number) => {
    if (cards.cardsVisible) return;

    handleUpdateSelection(item);
    handleSelectCard(index);
  };

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
        <SelectCard
          option={item}
          isSelected={_.isEqual(index, cardSelected)}
          onClick={() => handleSelectOption(item, index)}
        />
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
          onClick={showNewGame ? handleCreateNewGame : handleUpdateCardsVisible}
          disabled={buttonVariant === "disabled"}
          variant={buttonVariant}
          full
        >
          {renderButtonLabel()}
        </Button>
      </div>
    </div>
  );
};
