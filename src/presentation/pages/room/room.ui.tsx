import { Button, Card } from "@presentation/components";
import { IRoomUI } from "./room.types";
import { SelectCard } from "@presentation/components/select-card/select-card.container";
import { isEqual } from "lodash";

export const RoomUI: React.FC<IRoomUI> = ({
  user,
  cards,
  roundVotes,
  getVotingSystem,
  cardIndexSelected,
  handleCreateNewGame,
  handleUpdateSelection,
  handleUpdateCardsVisible,
}) => {
  const handleRevealCards = () => {
    handleUpdateCardsVisible();
  };

  const handleSelectOption = (item: string, index: number) => {
    if (cards.cardsVisible) return;

    handleUpdateSelection(item, index);
  };

  const renderOptions = () => {
    return getVotingSystem().map((item, index) => {
      const isSelected =
        user.option.isSelected && isEqual(index, cardIndexSelected);

      return (
        <SelectCard
          key={index}
          option={item}
          isSelected={isSelected}
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
      {cards.cardsVisible && (
        <div>
          <span>{JSON.stringify(roundVotes)}</span>
        </div>
      )}
      <div className="flex gap-4 flex-wrap mb-12">{renderUsers()}</div>
      <div className="flex flex-col items-center justify-center mb-12">
        <span className="mb-8">Choose your card 👇</span>
        <div className="flex gap-4">{renderOptions()}</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {cards.cardsVisible ? (
          <Button full onClick={handleCreateNewGame}>
            Start again!
          </Button>
        ) : (
          <Button full onClick={handleRevealCards}>
            Reveal cards!
          </Button>
        )}
      </div>
    </div>
  );
};
