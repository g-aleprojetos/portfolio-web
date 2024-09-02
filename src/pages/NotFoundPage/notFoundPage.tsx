import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './notFoundPage.styles';

export const NotFoundPage = () => {
  return (
    <S.Container data-testid="test-notFound-page">
      <S.Imagem
        data-testid="test-image-notFound-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
