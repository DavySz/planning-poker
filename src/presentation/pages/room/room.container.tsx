/* eslint-disable react-hooks/exhaustive-deps */
import { PageTemplate } from "@presentation/components";
import { RoomUI } from "./room.ui";
import { useParams } from "react-router-dom";
import { TRoomParams } from "./room.types";
import { useEffect, useState } from "react";
import { makeFirebaseDatabaseAdapter } from "@main/factories";
import { IRoomModel } from "domain/models/room-model";
import { useUserContext } from "@presentation/hooks/use-user-context";
import _ from "lodash";
import { IUserModel } from "@domain/models/user-model";

export const Room: React.FC = () => {
  const { user } = useUserContext();
  const { id: roomId } = useParams<TRoomParams>() as TRoomParams;

  const [cards, setCards] = useState<IRoomModel>({} as IRoomModel);
  const [cardSelected, setCardSelected] = useState<number>();
  const [showNewGame, setShowNewGame] = useState(false);

  const database = makeFirebaseDatabaseAdapter();

  const getVoting = (): RegExpMatchArray | null => {
    if (!cards.voting) return null;
    return cards.voting.match(/\b[PP|P|M|G|GG]+\b/g) as RegExpMatchArray;
  };

  const handleSelectCard = (cardIndex: number) => {
    setCardSelected(cardIndex);
  };

  function handleShowNewGame() {
    setShowNewGame(true);
  }

  const handleUpdateSelection = async (optionSelected: string) => {
    const userRef = await database.get(`rooms/${roomId}/users`);

    let userSelectKey = "";
    let userSelectValue: IUserModel = {} as IUserModel;

    Object.entries(userRef.val()).forEach(([key, value]) => {
      const userValue = value as IUserModel;
      if (_.isEqual(userValue.id, user.id)) {
        userSelectValue = userValue;
        userSelectKey = key;
      }
    });

    const cardSelectedUpdate: IUserModel = {
      ...userSelectValue,
      option: {
        isSelected: true,
        optionSelected,
      },
    };

    await database.update(
      cardSelectedUpdate,
      `rooms/${roomId}/users/${userSelectKey}`
    );
  };

  const handleUpdateCardsVisible = async () => {
    const cardsUpdated: IRoomModel = {
      ...cards,
      cardsVisible: !cards.cardsVisible,
    };

    await database.update(cardsUpdated, `rooms/${roomId}`);
  };

  useEffect(() => {
    database.lister(`rooms/${roomId}`, (cards) => setCards(cards));
  }, [roomId]);

  return (
    <PageTemplate onClick={() => {}} label="Leave room">
      {cards.users && (
        <RoomUI
          handleUpdateCardsVisible={handleUpdateCardsVisible}
          handleUpdateSelection={handleUpdateSelection}
          handleShowNewGame={handleShowNewGame}
          handleSelectCard={handleSelectCard}
          cardSelected={cardSelected}
          showNewGame={showNewGame}
          getVoting={getVoting}
          cards={cards}
        />
      )}
    </PageTemplate>
  );
};
