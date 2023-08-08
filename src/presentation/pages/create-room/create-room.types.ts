import { CreateRoom } from "@domain/usecases";
import { TPageState } from "@presentation/common/types/page-state";

export interface ICreateRoom {
  createRoom: CreateRoom;
}

export interface ICreateRoomUI {
  updateVoting: (value: string) => void;
  updateRoom: (value: string) => void;
  updateName: (value: string) => void;
  handleCreateRoom: () => void;
  pageState: TPageState;
}

export type TRoomForm = {
  room: string;
  name: string;
  voting: string;
};
