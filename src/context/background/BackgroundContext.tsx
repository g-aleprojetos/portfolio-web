import React, {createContext, ReactNode, useContext, useState} from 'react';

type BackgroundContextType = {
  themeDark: boolean;
  handleToggle: () => void;
};

type BackgroundProviderProps = {
  children: ReactNode;
};

export const BackgroundContext = createContext({} as BackgroundContextType);

export const BackgroundProvider = ({children}: BackgroundProviderProps) => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => setDark(prev => !prev);

  return (
    <BackgroundContext.Provider value={{themeDark: dark, handleToggle}}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundContext = () => {
  return useContext(BackgroundContext);
};
