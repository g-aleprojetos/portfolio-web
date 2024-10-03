import React from 'react';
import {AboutPage} from 'pages/AboutPage';
import {HomePage} from 'pages/HomePage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProjectsPage} from 'pages/ProjectsPage';
import {Layout} from 'pages/Layout';
import {InternalRoutes} from 'resources/enun/InternalRoutes';
import {useCurrentPageContext} from 'context/routesContext';
import {ConfigurationPage} from 'pages/ConfigurationPage';

export const WebRoutes = () => {
  const {currentPage} = useCurrentPageContext();

  const renderPage = () => {
    switch (currentPage) {
      case InternalRoutes.Home:
        return <HomePage />;
      case InternalRoutes.Projects:
        return <ProjectsPage />;
      case InternalRoutes.About:
        return <AboutPage />;
      case InternalRoutes.Settings:
        return <ConfigurationPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
};
