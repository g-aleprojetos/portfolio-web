import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import {useBackgroundContext} from 'context/background';
import {ToggleSwitch} from 'components/toggleSwitch';
import {Dropdown} from 'components/dropDown';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import routes from 'resources/routes';
import 'utils/i18n';
import * as S from './Layout.styles';

export const Layout = () => {
  const {themeDark, handleToggle} = useBackgroundContext();
  const {t} = useTranslation(namespaces.pages.header);
  return (
    <S.Container data-testid={'layout-page'} data-backgroundblack={themeDark}>
      <S.Header>
        <S.Nav>
          <S.Item>
            <S.ItemContent>
              <Link to={routes.Home}>
                <S.TextoHeader>{t('home')}</S.TextoHeader>
              </Link>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <S.ItemContent>
              <Link to={routes.Projects}>
                <S.TextoHeader>{t('contents')}</S.TextoHeader>
              </Link>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <S.ItemContent>
              <Link to={routes.About}>
                <S.TextoHeader>{t('about')}</S.TextoHeader>
              </Link>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <Dropdown />
          </S.Item>
          <S.Item>
            <ToggleSwitch isOn={themeDark} handleOnclick={handleToggle} />
          </S.Item>
        </S.Nav>
      </S.Header>
      <Outlet />
    </S.Container>
  );
};
