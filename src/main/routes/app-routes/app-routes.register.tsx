import {
  makeHomePage,
  makeRoomPage,
  makeCreateRoomPage,
} from "@main/factories/pages";
import { TAppRoutes } from "./app-routes.types";

export const appRoutes: TAppRoutes[] = [
  {
    element: makeHomePage({}),
    path: "/",
  },
  {
    element: makeRoomPage({}),
    path: "/room/:id",
  },
  {
    element: makeCreateRoomPage({}),
    path: "/create-room",
  },
];
