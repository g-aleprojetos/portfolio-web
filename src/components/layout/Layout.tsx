import React, {ReactNode} from 'react';
import {useBackgroundContext} from 'context/background';
import * as S from './Layout.styles';

type ILayout = {
  children: ReactNode;
};

export const Layout = ({children}: ILayout) => {
  const {themeDark} = useBackgroundContext();
  return (
    <S.Container data-testid={'layout-page'} data-backgroundblack={themeDark}>
      {children}
    </S.Container>
  );
};
