/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";

import { useUserContext } from "@presentation/hooks/use-user-context";
import { CopyText, PageTemplate } from "@presentation/components";
import { IRoomModel, IUserModel } from "@domain/models";

import { IRoom, TRoomParams } from "./room.types";
import { RoomUI } from "./room.ui";
import { IUpdateUserDTO } from "@domain/dtos";

export const Room: React.FC<IRoom> = ({
  updateUser,
  updateRoom,
  getAllUsers,
  getRoomEvents,
  updateAllUsers,
}) => {
  const { user } = useUserContext();
  const { id: roomId } = useParams<TRoomParams>() as TRoomParams;

  const [room, setRoom] = useState<IRoomModel>({} as IRoomModel);
  // const [roundVotes, setRoundVotes] = useState<string[]>([]);
  const [cardSelected, setCardSelected] = useState<number>();
  const [showNewGame, setShowNewGame] = useState(false);

  const getVoting = (): RegExpMatchArray | null => {
    if (!room.voting) return null;
    return room.voting.match(/\b[PP|P|M|G|GG]+\b/g) as RegExpMatchArray;
  };

  const handleSelectCard = (cardIndex: number) => {
    setCardSelected(cardIndex);
  };

  function handleShowNewGame() {
    setShowNewGame(true);
  }

  const handleUpdateSelection = async (optionSelected: string) => {
    let userSelectKey = "";
    let userSelectValue: IUserModel = {} as IUserModel;

    const response = await getAllUsers.get(roomId);

    Object.entries(response).forEach(([key, value]) => {
      if (_.isEqual(value.id, user.id)) {
        userSelectValue = value;
        userSelectKey = key;
      }
    });

    const userUpdated: IUserModel = {
      ...userSelectValue,
      option: {
        isSelected: true,
        optionSelected,
      },
    };

    const updateUserParams: IUpdateUserDTO = {
      userKey: userSelectKey,
      user: userUpdated,
      room: roomId,
    };

    await updateUser.update(updateUserParams);
  };

  const handleUpdateCardsVisible = async () => {
    const roomUpdated: IRoomModel = {
      ...room,
      cardsVisible: !room.cardsVisible,
    };

    await updateRoom.update({ room: roomUpdated, roomId });
  };

  const handleCreateNewGame = async () => {
    setShowNewGame(false);
    setCardSelected(undefined);
    await handleUpdateCardsVisible();

    await updateAllUsers.update({
      field: "isSelected",
      value: false,
      room: roomId,
    });
  };

  // const onGetAllRoundVotes = async () => {
  //   const userRef = await database.get(`rooms/${roomId}/users`);

  //   Object.entries(userRef.val()).forEach(([key, value]) => {
  //     const userValue = value as IUserModel;
  //     const optionSelected = userValue.option.optionSelected;

  //     if (_.isString(optionSelected)) {
  //       setRoundVotes((previous) => [...previous, optionSelected]);
  //     }
  //   });
  // };

  const addRemoteRoomListener = async () => {
    getRoomEvents.get({
      callback: (event) => setRoom(event),
      room: roomId,
    });
  };

  useEffect(() => {
    addRemoteRoomListener();
  }, [roomId]);

  return (
    <PageTemplate customComponent={<CopyText value={roomId} />}>
      {room.users && (
        <RoomUI
          handleUpdateCardsVisible={handleUpdateCardsVisible}
          handleUpdateSelection={handleUpdateSelection}
          handleCreateNewGame={handleCreateNewGame}
          handleShowNewGame={handleShowNewGame}
          handleSelectCard={handleSelectCard}
          cardSelected={cardSelected}
          showNewGame={showNewGame}
          getVoting={getVoting}
          cards={room}
        />
      )}
    </PageTemplate>
  );
};
