/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";

import { useUserContext } from "@presentation/hooks";
import { CopyText, PageTemplate } from "@presentation/components";
import { IGetRoundVotes, IRoomModel, IUserModel } from "@domain/models";

import { IRoom, TRoomParams } from "./room.types";
import { RoomUI } from "./room.ui";
import { IUpdateUserDTO } from "@domain/dtos";

export const Room: React.FC<IRoom> = ({
  updateUser,
  updateRoom,
  getAllUsers,
  startNewGame,
  getRoundVotes,
  getRoomEvents,
}) => {
  const { user, handleSetUser } = useUserContext();
  const { id: roomId } = useParams<TRoomParams>() as TRoomParams;

  const [roundVotes, setRoundVotes] = useState<IGetRoundVotes[]>([]);
  const [room, setRoom] = useState<IRoomModel>({} as IRoomModel);
  const [isCreatingGame, setIsCreatingGame] = useState(false);

  const [cardIndexSelected, setCardIndexSelected] = useState<number>();

  const getVotingSystem = (): Array<string> => {
    const hasFibonacci = /fibonacci/i.test(room.voting);

    if (hasFibonacci) {
      return ["1", "1", "2", "3", "5", "8", "13"];
    }

    return room.voting.match(/\b[PP|P|M|G|GG]+\b/g) as Array<string>;
  };

  const getAllRoundVotes = async (event: IRoomModel) => {
    if (event.cardsVisible) {
      const votes = await getRoundVotes.get(roomId);
      setRoundVotes(votes);
    }
  };

  const handleUpdateSelection = async (
    optionSelected: string,
    index: number
  ) => {
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

    setCardIndexSelected(index);
  };

  const handleUpdateCardsVisible = async () => {
    const roomUpdated: IRoomModel = {
      ...room,
      cardsVisible: !room.cardsVisible,
    };

    await updateRoom.update({ room: roomUpdated, roomId });
  };

  const handleCreateNewGame = async () => {
    setIsCreatingGame(true);
    setCardIndexSelected(undefined);

    await startNewGame.start({
      roomId: roomId,
      room,
    });

    setIsCreatingGame(false);
  };

  const updateLocalUser = ({ users }: IRoomModel) => {
    const updatedUser = Object.entries(users).find(([key, value]) =>
      _.isEqual(value.id, user.id)
    ) as [string, IUserModel];

    handleSetUser(updatedUser[1]);
  };

  const updateListenerDependencies = (event: IRoomModel) => {
    setRoom(event);
    updateLocalUser(event);
    getAllRoundVotes(event);
  };

  const addRemoteRoomListener = async () => {
    getRoomEvents.get({
      callback: (event) => updateListenerDependencies(event),
      room: roomId,
    });
  };

  useEffect(() => {
    if (!isCreatingGame) {
      addRemoteRoomListener();
    }
  }, [roomId, isCreatingGame]);

  return (
    <PageTemplate customComponent={<CopyText value={roomId} />}>
      {room.users && (
        <RoomUI
          handleUpdateCardsVisible={handleUpdateCardsVisible}
          handleUpdateSelection={handleUpdateSelection}
          handleCreateNewGame={handleCreateNewGame}
          cardIndexSelected={cardIndexSelected}
          getVotingSystem={getVotingSystem}
          roundVotes={roundVotes}
          room={room}
          user={user}
        />
      )}
    </PageTemplate>
  );
};
