import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './projects.styles';

export const Projects = () => {
  return (
    <S.Container data-testid="test-projects">
      <S.Imagem
        data-testid="test-image-projects"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
