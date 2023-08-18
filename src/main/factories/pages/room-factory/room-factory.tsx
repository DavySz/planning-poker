import {
  makeUpdateRoom,
  makeUpdateUser,
  makeGetAllUsers,
  makeUpdateAllUsers,
  makeGetRoomEvents,
  makeGetRoundVotes,
} from "@main/factories/usecases";
import { Room } from "@presentation/pages";

export const makeRoomPage: React.FC = () => {
  return (
    <Room
      updateAllUsers={makeUpdateAllUsers()}
      getRoomEvents={makeGetRoomEvents()}
      getRoundVotes={makeGetRoundVotes()}
      getAllUsers={makeGetAllUsers()}
      updateUser={makeUpdateUser()}
      updateRoom={makeUpdateRoom()}
    />
  );
};
