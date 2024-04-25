import { Bar, Button, Card } from "@presentation/components";
import { IRoomUI } from "./room.types";
import { SelectCard } from "@presentation/components/select-card/select-card.container";
import { isEqual, isNil } from "lodash";

export const RoomUI: React.FC<IRoomUI> = ({
  user,
  room,
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
    if (room.cardsVisible) return;

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
    if (!room.users || room.users.length === 0) return null;

    return Object.entries(room.users).map(([key, value]) => {
      return (
        <div
          className="flex flex-col gap-4 items-center justify-center"
          key={key}
        >
          <Card
            visible={room.cardsVisible}
            option={value.option.optionSelected}
          />
          <span className="text-lg">{value.name}</span>
        </div>
      );
    });
  };

  const renderRoundVotes = () => {
    if (!room.cardsVisible || roundVotes.length === 0) return;

    const usersVoted = Object.entries(room.users).filter(
      ([_, user]) => user.option.isSelected && user.option.optionSelected
    );

    return (
      <div className="flex gap-4">
        {roundVotes.map((item) => {
          const showBanner = !isNil(item.count) && !isNil(item.voting);

          if (showBanner) {
            return (
              <Bar
                total={usersVoted.length}
                label={item.voting}
                value={item.count}
                key={item.voting}
              />
            );
          }

          return null;
        })}
      </div>
    );
  };

  return (
    <div className="flex items-center">
      <div className="flex h-36">{renderRoundVotes()}</div>
      <div className="flex flex-col absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex gap-4 flex-wrap mb-12">{renderUsers()}</div>
          <span className="mb-8">Choose your card 👇</span>
          <div className="flex gap-4">{renderOptions()}</div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4">
          {room.cardsVisible ? (
            <Button full onClick={handleCreateNewGame} disabled={!user.owner}>
              Start again!
            </Button>
          ) : (
            <Button full onClick={handleRevealCards} disabled={!user.owner}>
              Reveal cards!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
