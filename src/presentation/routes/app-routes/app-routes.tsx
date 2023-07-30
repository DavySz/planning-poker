import { Route, BrowserRouter, Routes } from "react-router-dom";
import { appRoutes } from "./app-routes.register";

export const AppRoutes = () => {
  const getRoutes = () => {
    return appRoutes.map(({ element, path }) => {
      return <Route element={element} path={path} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>{getRoutes()}</Routes>
    </BrowserRouter>
  );
};
