import React, {createContext, useContext, useState, ReactNode} from 'react';
import {InternalRoutes} from 'resources/enun/InternalRoutes';

type CurrentPageContextType = {
  currentPage: InternalRoutes;
  handleCurrentPage: (page: InternalRoutes) => void;
};

type CurrentPageProviderProps = {
  children: ReactNode;
};

export const CurrentPageContext = createContext({} as CurrentPageContextType);

export const CurrentPageProvider = ({children}: CurrentPageProviderProps) => {
  const [currentPage, setCurrentPage] = useState<InternalRoutes>(
    InternalRoutes.Home,
  );

  const handleCurrentPage = (page: InternalRoutes) => setCurrentPage(page);

  return (
    <CurrentPageContext.Provider value={{currentPage, handleCurrentPage}}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export const useCurrentPageContext = () => {
  return useContext(CurrentPageContext);
};
