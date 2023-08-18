import { UserContext } from "@presentation/contexts";
import { useContext } from "react";

export const useUserContext = () => {
  return useContext(UserContext);
};
