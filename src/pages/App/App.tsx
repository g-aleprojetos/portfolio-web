import React from 'react';
import logo from 'assets/images/logo.svg';
import {useTranslation} from 'react-i18next';
import {namespaces} from 'utils/i18n/i18n.constants';
import 'utils/i18n';
import {ToggleSwitch} from 'components/toggleSwitch';
import * as S from './App.styles';
import {useBackgroundContext} from 'context/background';

export const App = () => {
  const {themeDark, handleToggle} = useBackgroundContext();
  const {t, i18n} = useTranslation(namespaces.pages.header);

  return (
    <S.App>
      <S.Header>
        <S.Nav>
          <S.Item>
            <S.TextoHeader>{t('home')}</S.TextoHeader>
          </S.Item>
          <S.Item>
            <S.TextoHeader>{t('contents')}</S.TextoHeader>
          </S.Item>
          <S.Item>
            <S.TextoHeader>{t('about')}</S.TextoHeader>
          </S.Item>
          <ToggleSwitch isOn={themeDark} handleOnclick={handleToggle} />
        </S.Nav>
      </S.Header>
      <S.Main>
        <S.ContainerBotoes>
          <S.Botao
            data-escolhido={i18n.resolvedLanguage === 'pt'}
            type="submit"
            onClick={() => i18n.changeLanguage('pt')}>
            Português
          </S.Botao>
          <S.Botao
            data-escolhido={i18n.resolvedLanguage === 'en'}
            type="submit"
            onClick={() => i18n.changeLanguage('en')}>
            English
          </S.Botao>
          <S.Botao
            data-escolhido={i18n.resolvedLanguage === 'fr'}
            type="submit"
            onClick={() => i18n.changeLanguage('fr')}>
            Français
          </S.Botao>
        </S.ContainerBotoes>
        <S.Logo src={logo} alt="logo" />
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
