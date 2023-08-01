import { TPageState } from "@presentation/common/types/page-state";

export interface ICreateRoomUI {
  updateVoting: (value: string) => void;
  updateRoom: (value: string) => void;
  updateName: (value: string) => void;
  handleCreateRoom: () => void;
  pageState: TPageState;
}
