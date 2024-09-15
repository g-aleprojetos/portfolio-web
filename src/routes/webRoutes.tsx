import React from 'react';
import {
  RouterProvider,
  RouteObject,
  createBrowserRouter,
} from 'react-router-dom';
import routes from 'resources/routes';
import {AboutPage} from 'pages/AboutPage';
import {HomePage} from 'pages/HomePage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProjectsPage} from 'pages/ProjectsPage';
import {Layout} from 'pages/Layout';

export const WebRoutes = () => {
  const routeConfig: RouteObject[] = [
    {
      id: 'root-route',
      path: routes.Home,
      Component: Layout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: routes.Projects,
          Component: ProjectsPage,
        },
        {
          path: routes.About,
          Component: AboutPage,
        },
        {
          path: '*',
          Component: NotFoundPage,
        },
      ],
    },
  ];
  const basename = '/portifolio-web';

  const router = createBrowserRouter(routeConfig, {
    basename,
  });

  return <RouterProvider router={router} />;
};
