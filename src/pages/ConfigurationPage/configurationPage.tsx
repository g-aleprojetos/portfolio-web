import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './configurationPage.styles';

export const ConfigurationPage = () => {
  return (
    <S.Container data-testid="test-configuration-page">
      <S.Imagem
        data-testid="test-image-configuration-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
