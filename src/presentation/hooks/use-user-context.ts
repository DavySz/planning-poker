import { UserContext } from "@presentation/contexts/user-context/user-context";
import { useContext } from "react";

export const useUserContext = () => {
  return useContext(UserContext);
};
