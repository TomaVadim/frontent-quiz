import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { Home } from "../pages/home/home";
import { ROUTES_ENUM } from "../types/enums/routes.enum";
import { MainLayout } from "../routes/layouts/main-layout/main-layout";

export const AppNavigation = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path={ROUTES_ENUM.HOME} element={<Home />} />
    </Route>,
  ),
);
