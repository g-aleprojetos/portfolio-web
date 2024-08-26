import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './notFound.styles';

export const NotFound = () => {
  return (
    <S.Container data-testid="test-notFound">
      <S.Imagem
        data-testid="test-image-notFound"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
