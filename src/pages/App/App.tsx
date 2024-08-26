import React from 'react';
import logo from 'assets/images/logo.svg';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import 'utils/i18n';
import {ToggleSwitch} from 'components/toggleSwitch';
import {useBackgroundContext} from 'context/background';
import {Dropdown} from 'components/dropDown';
import * as S from './App.styles';

export const App = () => {
  const {themeDark, handleToggle} = useBackgroundContext();
  const {t} = useTranslation(namespaces.pages.header);

  return (
    <S.App>
      <S.Header>
        <S.Nav>
          <S.Item>
            <S.ItemContent>
              <S.TextoHeader>{t('home')}</S.TextoHeader>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <S.ItemContent>
              <S.TextoHeader>{t('contents')}</S.TextoHeader>
            </S.ItemContent>
          </S.Item>
          <S.Item>
            <S.ItemContent>
              <S.TextoHeader>{t('about')}</S.TextoHeader>
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
      <S.Main>
        <S.Logo data-testid="image-logo" src={logo} alt="logo" />
        <S.Texto>
          Edit <code>src/App.tsx</code> and save to reload.
        </S.Texto>
        <S.Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </S.Link>
      </S.Main>
    </S.App>
  );
};
