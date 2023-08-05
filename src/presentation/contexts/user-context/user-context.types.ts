import { IUserModel } from "domain/models/user-model";
import { ReactNode } from "react";

export interface IUserContextProvider {
  children: ReactNode;
}

export interface IUserContext {
  handleSetUser: (userParam: IUserModel) => void;
  user: IUserModel;
}
