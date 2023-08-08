import { IUserModel } from "@domain/models/user-model";
import { IRoomFactory } from "./room-factory.types";
import { IRoomModel } from "@domain/models/room-model";
import { makeUuidHashAdapter } from "@main/factories/adapters";

export const makeRoom = ({ user, room, voting }: IRoomFactory): IRoomModel => {
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
