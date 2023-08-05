import { IUserModel } from "@domain/models/user-model";
import { makeUuidHashAdapter } from "../uuid-hash-adapter-factory/uuid-hash-adapter-factory";
import { IRoomFactory } from "./room-factory.types";
import { IRoomModel } from "@domain/models/room-model";

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
