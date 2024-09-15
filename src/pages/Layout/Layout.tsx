import React from 'react';
import {Outlet} from 'react-router-dom';
import {useBackgroundContext} from 'context/background';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import 'utils/i18n';
import * as S from './Layout.styles';

export const Layout = () => {
  const {themeDark} = useBackgroundContext();

  return (
    <S.Container data-testid={'layout-page'} $backgroundblack={themeDark}>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.Container>
  );
};
