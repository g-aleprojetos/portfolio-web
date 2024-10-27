import React, {ReactNode} from 'react';
import {useBackgroundContext} from 'context/background';
import {Header} from 'components/header';
import {Footer} from 'components/footer';
import 'utils/i18n';
import {Sidebar} from 'components/sidebar';
import * as S from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  const {themeDark} = useBackgroundContext();

  return (
    <S.Container data-testid={'layout-page'} $backgroundblack={themeDark}>
      <Header />
      <S.Content>
        <Sidebar />
        {children}
      </S.Content>
      <Footer />
    </S.Container>
  );
};
