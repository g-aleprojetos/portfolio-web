import 'utils/i18n';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import {useCurrentPageContext} from 'context/routesContext';
import IconHome from 'assets/icons/iHome.svg';
import IconPerson from 'assets/icons/iUser.svg';
import IconDashBoard from 'assets/icons/iDashBoard.svg';
import IconSettings from 'assets/icons/iSettings.svg';
import {InternalRoutes} from 'resources/enun/InternalRoutes';
import * as S from './sidebar.styles';

export const Sidebar = () => {
  const {currentPage, handleCurrentPage} = useCurrentPageContext();
  const {t} = useTranslation(namespaces.pages.header);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <S.Container data-testid="sidebar" $openMenu={isMenuOpen}>
      <S.Inner>
        <S.HeaderSidebar>
          <S.IconeHanburger mudarEstado={handleOpenMenu} />
          <S.TextoHeaderSidebar>Menu</S.TextoHeaderSidebar>
        </S.HeaderSidebar>
        <S.MenuSidebar>
          <S.BotaoMenu
            $isActivated={currentPage === InternalRoutes.Home}
            onClick={() => handleCurrentPage(InternalRoutes.Home)}>
            <S.Imagem
              data-testid="test-image-icon-home"
              alt="Home"
              src={IconHome}
            />
            <S.TextoBotao>{t('home')}</S.TextoBotao>
          </S.BotaoMenu>
          <S.BotaoMenu
            $isActivated={currentPage === InternalRoutes.Projects}
            onClick={() => handleCurrentPage(InternalRoutes.Projects)}>
            <S.Imagem
              data-testid="test-image-icon-projects"
              alt="Projects"
              src={IconDashBoard}
            />
            <S.TextoBotao>{t('projects')}</S.TextoBotao>
          </S.BotaoMenu>
          <S.BotaoMenu
            $isActivated={currentPage === InternalRoutes.About}
            onClick={() => handleCurrentPage(InternalRoutes.About)}>
            <S.Imagem
              data-testid="test-image-icon-about"
              alt="About"
              src={IconPerson}
            />
            <S.TextoBotao>{t('about')}</S.TextoBotao>
          </S.BotaoMenu>
          <S.BotaoMenu
            $isActivated={currentPage === InternalRoutes.Settings}
            onClick={() => handleCurrentPage(InternalRoutes.Settings)}>
            <S.Imagem
              data-testid="test-image-icon-settings"
              alt="Settings"
              src={IconSettings}
            />
            <S.TextoBotao>{t('settings')}</S.TextoBotao>
          </S.BotaoMenu>
        </S.MenuSidebar>
      </S.Inner>
    </S.Container>
  );
};
