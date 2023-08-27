import {
  makeUpdateRoom,
  makeUpdateUser,
  makeGetAllUsers,
  makeGetRoomEvents,
  makeGetRoundVotes,
  makeStartNewGame,
} from "@main/factories/usecases";
import { Room } from "@presentation/pages";

export const makeRoomPage: React.FC = () => {
  return (
    <Room
      startNewGame={makeStartNewGame()}
      getRoomEvents={makeGetRoomEvents()}
      getRoundVotes={makeGetRoundVotes()}
      getAllUsers={makeGetAllUsers()}
      updateUser={makeUpdateUser()}
      updateRoom={makeUpdateRoom()}
    />
  );
};
