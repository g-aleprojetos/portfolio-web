import React from 'react';
import {useBackgroundContext} from 'context/background';
import {useCurrentPageContext} from 'context/routesContext';
import {ToggleSwitch} from 'components/toggleSwitch';
import {Dropdown} from 'components/dropDown';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import {InternalRoutes} from 'resources/enun/InternalRoutes';
import logo from 'assets/images/logo.svg';
import 'utils/i18n';
import * as S from './Header.styles';

export const Header = () => {
  const {themeDark, handleToggle} = useBackgroundContext();
  const {currentPage, handleCurrentPage} = useCurrentPageContext();
  const {t} = useTranslation(namespaces.pages.header);
  return (
    <S.HeaderContainer data-testid={'header'}>
      <S.Navegacao onClick={() => handleCurrentPage(InternalRoutes.Home)}>
        <S.ContainerLogo>
          <S.Imagem
            data-testid="test-image-logo"
            alt="Logo"
            src={logo}
            $isActivated={currentPage === InternalRoutes.Home}
          />
        </S.ContainerLogo>
      </S.Navegacao>
      <S.Nav>
        <S.Item>
          <S.ItemContent
            data-testid={`${InternalRoutes.Home}-item-content`}
            $backgroundblack={themeDark}
            $isActivated={currentPage === InternalRoutes.Home}>
            <S.Navegacao onClick={() => handleCurrentPage(InternalRoutes.Home)}>
              <S.TextoHeader
                $backgroundblack={themeDark}
                $isActivated={currentPage === InternalRoutes.Home}>
                {t('home')}
              </S.TextoHeader>
            </S.Navegacao>
          </S.ItemContent>
        </S.Item>
        <S.Item>
          <S.ItemContent
            data-testid={`${InternalRoutes.Projects}-item-content`}
            $backgroundblack={themeDark}
            $isActivated={currentPage === InternalRoutes.Projects}>
            <S.Navegacao
              onClick={() => handleCurrentPage(InternalRoutes.Projects)}>
              <S.TextoHeader
                $backgroundblack={themeDark}
                $isActivated={currentPage === InternalRoutes.Projects}>
                {t('projects')}
              </S.TextoHeader>
            </S.Navegacao>
          </S.ItemContent>
        </S.Item>
        <S.Item>
          <S.ItemContent
            data-testid={`${InternalRoutes.About}-item-content`}
            $backgroundblack={themeDark}
            $isActivated={currentPage === InternalRoutes.About}>
            <S.Navegacao
              onClick={() => handleCurrentPage(InternalRoutes.About)}>
              <S.TextoHeader
                $backgroundblack={themeDark}
                $isActivated={currentPage === InternalRoutes.About}>
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
