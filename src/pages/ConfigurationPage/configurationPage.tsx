import React from 'react';
import manutencao from 'assets/images/manutencao.svg';
import {useBackgroundContext} from 'context/background';

import * as S from './configurationPage.styles';

export const ConfigurationPage = () => {
  const {themeDark} = useBackgroundContext();

  return (
    <S.Container data-testid="test-configuration-page">
      <S.Title $backgroundblack={themeDark}>SettingsPage</S.Title>
      <S.Imagem
        data-testid="test-image-configuration-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
