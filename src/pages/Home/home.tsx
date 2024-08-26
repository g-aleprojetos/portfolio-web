import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './home.styles';

export const Home = () => {
  return (
    <S.Container data-testid="test-home">
      <S.Imagem
        data-testid="test-image-home"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
