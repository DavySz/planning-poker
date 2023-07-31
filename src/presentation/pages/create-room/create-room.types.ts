export type TForm = {
  room: string;
  voting: string;
};

export interface ICreateRoomUI {
  updateVoting: (value: string) => void;
  updateRoom: (value: string) => void;
  handleCreateRoom: () => void;
}
