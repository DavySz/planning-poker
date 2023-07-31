import { PageTemplate } from "@presentation/components";
import { useNavigate } from "react-router-dom";
import { HomeUI } from "./home.ui";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStartNewGame = () => {
    navigate("/room/123");
  };

  return (
    <PageTemplate onClick={handleStartNewGame} label="Start new game!">
      <HomeUI />
    </PageTemplate>
  );
};