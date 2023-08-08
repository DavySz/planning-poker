import { IUserModel } from "@domain/models/user-model";
import { IRoomModel } from "@domain/models/room-model";
import { makeUuidHashAdapter } from "@main/factories/adapters";
import { ICreateRoomDTO } from "@domain/dtos/create-room";

export const makeRoom = ({
  user,
  room,
  voting,
}: ICreateRoomDTO): IRoomModel => {
  const roomId = makeUuidHashAdapter().get();

  const users: IUserModel[] = [];

  users.push(user);

  return {
    room,
    users,
    voting,
    roomId,
    cardsVisible: false,
  };
};
