import { PageTemplate } from "@presentation/components";
import { useNavigate } from "react-router-dom";
import { HomeUI } from "./home.ui";
import { useState } from "react";
import { makeFirebaseDatabaseAdapter, makeUser } from "@main/factories";
import { TPageState } from "@presentation/common/types/page-state";
import { useUserContext } from "@presentation/hooks/use-user-context";

export const Home: React.FC = () => {
  const { handleSetUser } = useUserContext();
  const navigate = useNavigate();

  const [pageState, setPageState] = useState<TPageState>("initial");
  const [roomCode, setRoomCode] = useState("");
  const [userName, setUserName] = useState("");

  const database = makeFirebaseDatabaseAdapter();

  const handleUpdateRoomCode = (code: string) => {
    setRoomCode(code);
  };

  const handleUpdateUserName = (user: string) => {
    setUserName(user);
  };

  const handleStartNewGame = () => {
    navigate("/create-room");
  };

  const handleJoinInRoom = async () => {
    if (roomCode === "" || userName === "") return;

    setPageState("loading");

    try {
      const roomRef = await database.get(`rooms/${roomCode}`);

      if (!roomRef.exists()) {
        setPageState("ready");
        return;
      }

      const user = makeUser(userName, false);

      handleSetUser(user);

      await database.push(user, `rooms/${roomCode}/users`);

      navigate(`/room/${roomCode}`);
    } catch {
      setPageState("error");
    }
  };

  return (
    <PageTemplate onClick={handleStartNewGame} label="Start new game!">
      <HomeUI
        pageState={pageState}
        handleJoinInRoom={handleJoinInRoom}
        handleUpdateUserName={handleUpdateUserName}
        handleUpdateRoomCode={handleUpdateRoomCode}
      />
    </PageTemplate>
  );
};
