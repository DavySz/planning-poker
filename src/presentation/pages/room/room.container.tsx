/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";

import { useUserContext } from "@presentation/hooks/use-user-context";
import { CopyText, PageTemplate } from "@presentation/components";
import { makeFirebaseDatabaseAdapter } from "@main/factories";
import { IRoomModel, IUserModel } from "@domain/models";

import { TRoomParams } from "./room.types";
import { RoomUI } from "./room.ui";

export const Room: React.FC = () => {
  const { user } = useUserContext();
  const { id: roomId } = useParams<TRoomParams>() as TRoomParams;

  const [cards, setCards] = useState<IRoomModel>({} as IRoomModel);
  const [roundVotes, setRoundVotes] = useState<string[]>([]);
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

  const handleCreateNewGame = async () => {
    setShowNewGame(false);
    setCardSelected(undefined);
    await handleUpdateCardsVisible();
    await database.updateFieldForAllChildren(
      false,
      "isSelected",
      `rooms/${roomId}/users`
    );
  };

  const onGetAllRoundVotes = async () => {
    const userRef = await database.get(`rooms/${roomId}/users`);

    Object.entries(userRef.val()).forEach(([key, value]) => {
      const userValue = value as IUserModel;
      const optionSelected = userValue.option.optionSelected;

      if (_.isString(optionSelected)) {
        setRoundVotes((previous) => [...previous, optionSelected]);
      }
    });
  };

  useEffect(() => {
    database.lister(`rooms/${roomId}`, (cards) => setCards(cards));
  }, [roomId]);

  return (
    <PageTemplate customComponent={<CopyText value={roomId} />}>
      {cards.users && (
        <RoomUI
          handleUpdateCardsVisible={handleUpdateCardsVisible}
          handleUpdateSelection={handleUpdateSelection}
          handleCreateNewGame={handleCreateNewGame}
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
