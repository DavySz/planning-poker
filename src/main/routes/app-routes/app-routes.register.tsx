import { makeCreateRoom, makeHome, makeRoomPage } from "@main/factories/pages";
import { TAppRoutes } from "./app-routes.types";

export const appRoutes: TAppRoutes[] = [
  {
    element: makeHome({}),
    path: "/",
  },
  {
    element: makeRoomPage({}),
    path: "/room/:id",
  },
  {
    element: makeCreateRoom({}),
    path: "/create-room",
  },
];
