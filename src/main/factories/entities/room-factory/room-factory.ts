import { IUserModel } from "@domain/models/user-model";
import { IRoomModel } from "@domain/models/room-model";
import { ICreateRoomDTO } from "@domain/dtos/create-room";
import { makeUuidGetHashAdapter } from "@main/factories/adapters";

export const makeRoom = ({
  user,
  room,
  voting,
}: ICreateRoomDTO): IRoomModel => {
  const roomId = makeUuidGetHashAdapter().get();

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
