import { UserContextProvider } from "@presentation/contexts";
import { AppRoutes } from "./app-routes/app-routes";

export const Routes = () => {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  );
};
