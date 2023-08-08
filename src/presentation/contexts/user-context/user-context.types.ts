import { IUserModel } from "@domain/models";
import { ReactNode } from "react";

export interface IUserContextProvider {
  children: ReactNode;
}

export interface IUserContext {
  handleSetUser: (userParam: IUserModel) => void;
  user: IUserModel;
}
