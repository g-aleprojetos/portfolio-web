import React from 'react';
import {Outlet} from 'react-router-dom';
import {useBackgroundContext} from 'context/background';
import {Header} from 'components/header';
import 'utils/i18n';
import * as S from './Layout.styles';

export const Layout = () => {
  const {themeDark} = useBackgroundContext();
  return (
    <S.Container data-testid={'layout-page'} $backgroundblack={themeDark}>
      <Header />
      <Outlet />
    </S.Container>
  );
};
