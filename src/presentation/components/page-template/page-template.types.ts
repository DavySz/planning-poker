import { ReactNode } from "react";
import { IHeader } from "../header/header.types";

export interface IPageTemplateContainer extends IHeader {
  children: ReactNode;
}

export interface IPageTemplate extends IHeader {
  children: ReactNode;
}
