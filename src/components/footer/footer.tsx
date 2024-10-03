import 'utils/i18n';
import React from 'react';
import IconHome from 'assets/icons/iHome.svg';
import IconPerson from 'assets/icons/iUser.svg';
import IconDashBoard from 'assets/icons/iDashBoard.svg';
import IconSettings from 'assets/icons/iSettings.svg';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import {useBackgroundContext} from 'context/background';
import {useCurrentPageContext} from 'context/routesContext';
import {InternalRoutes} from 'resources/enun/InternalRoutes';
import * as S from './footer.styles';

export const Footer = () => {
  const {themeDark} = useBackgroundContext();
  const {currentPage, handleCurrentPage} = useCurrentPageContext();
  const {t} = useTranslation(namespaces.pages.header);

  return (
    <S.ContainerFooter data-testid="footer">
      <S.Container data-testid="container-footer" $backgroundblack={themeDark}>
        <S.ContainerItem>
          <S.Item $isActivated={currentPage === InternalRoutes.Home}>
            <S.Navegacao onClick={() => handleCurrentPage(InternalRoutes.Home)}>
              <S.Imagem
                data-testid="test-image-icon-home"
                alt="Home"
                src={IconHome}
                $isActivated={currentPage === InternalRoutes.Home}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={currentPage === InternalRoutes.Home}
                $backgroundblack={themeDark}>
                {t('home')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Item $isActivated={currentPage === InternalRoutes.Projects}>
            <S.Navegacao
              onClick={() => handleCurrentPage(InternalRoutes.Projects)}>
              <S.Imagem
                data-testid="test-image-icon-projects"
                alt="Projects"
                src={IconDashBoard}
                $isActivated={currentPage === InternalRoutes.Projects}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={currentPage === InternalRoutes.Projects}
                $backgroundblack={themeDark}>
                {t('projects')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Item $isActivated={currentPage === InternalRoutes.About}>
            <S.Navegacao
              onClick={() => handleCurrentPage(InternalRoutes.About)}>
              <S.Imagem
                data-testid="test-image-icon-about"
                alt="About"
                src={IconPerson}
                $isActivated={currentPage === InternalRoutes.About}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={currentPage === InternalRoutes.About}
                $backgroundblack={themeDark}>
                {t('about')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Item $isActivated={currentPage === InternalRoutes.Settings}>
            <S.Navegacao
              onClick={() => handleCurrentPage(InternalRoutes.Settings)}>
              <S.Imagem
                data-testid="test-image-icon-settings"
                alt="Settings"
                src={IconSettings}
                $isActivated={currentPage === InternalRoutes.Settings}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={currentPage === InternalRoutes.Settings}
                $backgroundblack={themeDark}>
                {t('settings')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Indicator $position={getRouteIndex(currentPage)} />
        </S.ContainerItem>
      </S.Container>
    </S.ContainerFooter>
  );
};

const getRouteIndex = (pathname: string): number => {
  const routeKeys = Object.keys(InternalRoutes) as Array<
    keyof typeof InternalRoutes
  >;
  const index = routeKeys.findIndex(key => InternalRoutes[key] === pathname);

  return index;
};
