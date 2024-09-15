import React from 'react';
import IconHome from 'assets/icons/iHome.svg';
import IconPerson from 'assets/icons/iUser.svg';
import IconDashBoard from 'assets/icons/iDashBoard.svg';
import IconSettings from 'assets/icons/iSettings.svg';
import routes from 'resources/routes';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import 'utils/i18n';
import {useBackgroundContext} from 'context/background';
import {useLocation} from 'react-router-dom';
import * as S from './footer.styles';

export const Footer = () => {
  const {themeDark} = useBackgroundContext();
  const {t} = useTranslation(namespaces.pages.header);
  const location = useLocation();

  return (
    <S.ContainerFooter data-testid="footer">
      <S.Container data-testid="container-footer" $backgroundblack={themeDark}>
        <S.ContainerItem>
          <S.Item $isActivated={location.pathname === routes.Home}>
            <S.Navegacao to={routes.Home}>
              <S.Imagem
                data-testid="test-image-icon-home"
                alt="Home"
                src={IconHome}
                $isActivated={location.pathname === routes.Home}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={location.pathname === routes.Home}
                $backgroundblack={themeDark}>
                {t('home')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Item $isActivated={location.pathname === routes.Projects}>
            <S.Navegacao to={routes.Projects}>
              <S.Imagem
                data-testid="test-image-icon-projects"
                alt="Projects"
                src={IconDashBoard}
                $isActivated={location.pathname === routes.Projects}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={location.pathname === routes.Projects}
                $backgroundblack={themeDark}>
                {t('projects')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Item $isActivated={location.pathname === routes.About}>
            <S.Navegacao to={routes.About}>
              <S.Imagem
                data-testid="test-image-icon-about"
                alt="About"
                src={IconPerson}
                $isActivated={location.pathname === routes.About}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={location.pathname === routes.About}
                $backgroundblack={themeDark}>
                {t('about')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Item $isActivated={location.pathname === routes.Settings}>
            <S.Navegacao to={routes.Settings}>
              <S.Imagem
                data-testid="test-image-icon-settings"
                alt="Settings"
                src={IconSettings}
                $isActivated={location.pathname === routes.Settings}
                $backgroundblack={themeDark}
              />
              <S.TextNavegation
                $isActivated={location.pathname === routes.Settings}
                $backgroundblack={themeDark}>
                {t('settings')}
              </S.TextNavegation>
            </S.Navegacao>
          </S.Item>
          <S.Indicator $position={getRouteIndex(location.pathname)} />
        </S.ContainerItem>
      </S.Container>
    </S.ContainerFooter>
  );
};

const getRouteIndex = (pathname: string): number => {
  const routeKeys = Object.keys(routes) as Array<keyof typeof routes>;
  const index = routeKeys.findIndex(key => routes[key] === pathname);

  return index;
};
