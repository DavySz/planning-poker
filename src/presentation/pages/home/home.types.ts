import { TPageState } from "@presentation/common/types/page-state";

export interface IHomeUI {
  pageState: TPageState;
  handleJoinInRoom: () => void;
  handleUpdateUserName: (user: string) => void;
  handleUpdateRoomCode: (code: string) => void;
}
