import { createContext, useMemo, useState } from "react";
import { IUserContext, IUserContextProvider } from "./user-context.types";
import { IUserModel } from "@domain/models/user-model";

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [user, setUser] = useState({} as IUserModel);

  const handleSetUser = (userParam: IUserModel) => {
    setUser(userParam);
  };

  const values = useMemo(
    (): IUserContext => ({
      handleSetUser,
      user,
    }),
    [user]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
