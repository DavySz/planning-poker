import { IRoomModel } from "@domain/models";
import {
  GetAllUsers,
  GetRoomEvents,
  UpdateAllUsers,
  UpdateRoom,
  UpdateUser,
} from "@domain/usecases";

export type TRoomParams = {
  id: string;
};

export interface IRoom {
  updateUser: UpdateUser;
  updateRoom: UpdateRoom;
  getAllUsers: GetAllUsers;
  getRoomEvents: GetRoomEvents;
  updateAllUsers: UpdateAllUsers;
}

export interface IRoomUI {
  handleUpdateSelection: (optionSelected: string) => void;
  handleSelectCard: (cardIndex: number) => void;
  handleUpdateCardsVisible: () => void;
  getVoting: () => string[] | null;
  handleCreateNewGame: () => void;
  handleShowNewGame: () => void;
  cardSelected?: number;
  showNewGame: boolean;
  cards: IRoomModel;
}
