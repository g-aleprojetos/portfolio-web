import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './homePage.styles';

export const HomePage = () => {
  return (
    <S.Container data-testid="test-home-page">
      <S.Imagem
        data-testid="test-image-home-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
