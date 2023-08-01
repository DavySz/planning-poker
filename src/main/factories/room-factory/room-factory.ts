import { IRoomModel } from "domain/models/room-model";
import { makeUuidHashAdapter } from "../uuid-hash-adapter-factory/uuid-hash-adapter-factory";
import { IRoomFactory } from "./room-factory.types";
import { makeUser } from "../user-factory/user-factory";

export const makeRoom = ({ name, room, voting }: IRoomFactory): IRoomModel => {
  const roomId = makeUuidHashAdapter().get();
  const user = makeUser(name);

  return {
    voting,
    user,
    room,
    roomId,
  };
};
