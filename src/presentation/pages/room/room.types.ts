import { IRoomModel } from "domain/models/room-model";

export type TRoomParams = {
  id: string;
};

export interface IRoomUI {
  handleUpdateSelection: (optionSelected: string) => void;
  handleSelectCard: (cardIndex: number) => void;
  handleUpdateCardsVisible: () => void;
  getVoting: () => string[] | null;
  cardSelected?: number;
  cards: IRoomModel;
}
