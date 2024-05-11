import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";

function generateFlattenRoutes(routes) {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [rest, generateFlattenRoutes(subRoutes)])
  );
}

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map((subRoute, index) => {
            return (
              <Route
                key={index}
                element={<ProtectedRoute isPublic={subRoute.isPublic} isAuthorized={isAuthorized} />}
              >
                <Route key={subRoute.path} element={subRoute.component()} path={subRoute.path} />
              </Route>
            );
          })}
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};
