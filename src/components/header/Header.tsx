import React from 'react';
import {useBackgroundContext} from 'context/background';
import {ToggleSwitch} from 'components/toggleSwitch';
import {Dropdown} from 'components/dropDown';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import {useLocation} from 'react-router-dom';
import routes from 'resources/routes';
import logo from 'assets/images/logo.svg';
import 'utils/i18n';
import * as S from './Header.styles';

export const Header = () => {
  const {themeDark, handleToggle} = useBackgroundContext();
  const {t} = useTranslation(namespaces.pages.header);
  const location = useLocation();
  return (
    <S.HeaderContainer data-testid={'header'}>
      <S.Navegacao to={routes.Home}>
        <S.ContainerLogo>
          <S.Imagem
            data-testid="test-image-logo"
            alt="Logo"
            src={logo}
            $isActivated={location.pathname === routes.Home}
          />
        </S.ContainerLogo>
      </S.Navegacao>
      <S.Nav>
        <S.Item>
          <S.ItemContent
            $backgroundblack={themeDark}
            $isActivated={location.pathname === routes.Home}>
            <S.Navegacao to={routes.Home}>
              <S.TextoHeader
                $backgroundblack={themeDark}
                $isActivated={location.pathname === routes.Home}>
                {t('home')}
              </S.TextoHeader>
            </S.Navegacao>
          </S.ItemContent>
        </S.Item>
        <S.Item>
          <S.ItemContent
            $backgroundblack={themeDark}
            $isActivated={location.pathname === routes.Projects}>
            <S.Navegacao to={routes.Projects}>
              <S.TextoHeader
                $backgroundblack={themeDark}
                $isActivated={location.pathname === routes.Projects}>
                {t('contents')}
              </S.TextoHeader>
            </S.Navegacao>
          </S.ItemContent>
        </S.Item>
        <S.Item>
          <S.ItemContent
            $backgroundblack={themeDark}
            $isActivated={location.pathname === routes.About}>
            <S.Navegacao to={routes.About}>
              <S.TextoHeader
                $backgroundblack={themeDark}
                $isActivated={location.pathname === routes.About}>
                {t('about')}
              </S.TextoHeader>
            </S.Navegacao>
          </S.ItemContent>
        </S.Item>
        <S.Item>
          <Dropdown />
        </S.Item>
        <S.Item>
          <ToggleSwitch isOn={themeDark} handleOnclick={handleToggle} />
        </S.Item>
      </S.Nav>
    </S.HeaderContainer>
  );
};
