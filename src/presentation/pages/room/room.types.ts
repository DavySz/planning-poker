import { IGetRoundVotes, IRoomModel, IUserModel } from "@domain/models";
import {
  GetAllUsers,
  GetRoomEvents,
  GetRoundVotes,
  UpdateRoom,
  StartNewGame,
  UpdateUser,
} from "@domain/usecases";

export type TRoomParams = {
  id: string;
};

export interface IRoom {
  updateUser: UpdateUser;
  updateRoom: UpdateRoom;
  getAllUsers: GetAllUsers;
  getRoundVotes: GetRoundVotes;
  getRoomEvents: GetRoomEvents;
  startNewGame: StartNewGame;
}

export interface IRoomUI {
  handleUpdateSelection: (optionSelected: string, index: number) => void;
  handleUpdateCardsVisible: () => void;
  handleCreateNewGame: () => void;
  getVotingSystem: () => string[];
  roundVotes: IGetRoundVotes[];
  cardIndexSelected?: number;
  cards: IRoomModel;
  user: IUserModel;
}
