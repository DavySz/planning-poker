import { PageTemplate } from "@presentation/components";
import { useNavigate } from "react-router-dom";
import { HomeUI } from "./home.ui";
import { useState } from "react";
import { makeFirebaseDatabaseAdapter } from "@main/factories";
import { TPageState } from "@presentation/common/types/page-state";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const [pageState, setPageState] = useState<TPageState>("initial");
  const [roomCode, setRoomCode] = useState("");

  const database = makeFirebaseDatabaseAdapter();

  const handleUpdateRoomCode = (code: string) => {
    setRoomCode(code);
  };

  const handleStartNewGame = () => {
    navigate("/create-room");
  };

  const handleJoinInRoom = async () => {
    if (roomCode === "") return;
    setPageState("loading");

    try {
      const roomRef = await database.get(`rooms/${roomCode}`);

      if (!roomRef.exists()) {
        setPageState("ready");
        return;
      }

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
        handleUpdateRoomCode={handleUpdateRoomCode}
      />
    </PageTemplate>
  );
};
