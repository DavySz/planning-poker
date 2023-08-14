import { makeUser } from "@main/factories/entities";
import {
  makeRemoteGetRoom,
  makeRemoteCreateUser,
} from "@main/factories/usecases";
import { Home } from "@presentation/pages";

export const makeHomePage: React.FC = () => {
  return (
    <Home
      createUser={makeRemoteCreateUser()}
      getRoom={makeRemoteGetRoom()}
      createUserModel={makeUser}
    />
  );
};
