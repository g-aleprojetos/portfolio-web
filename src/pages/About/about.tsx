import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './about.styles';

export const About = () => {
  return (
    <S.Container data-testid="test-about">
      <S.Imagem
        data-testid="test-image-about"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
