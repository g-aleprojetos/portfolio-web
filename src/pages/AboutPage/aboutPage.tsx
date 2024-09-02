import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './aboutPage.styles';

export const AboutPage = () => {
  return (
    <S.Container data-testid="test-about-page">
      <S.Imagem
        data-testid="test-image-about-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
