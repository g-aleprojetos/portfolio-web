import React from 'react';
import manutencao from 'assets/images/manutencao.svg';

import * as S from './projectsPage.styles';

export const ProjectsPage = () => {
  return (
    <S.Container data-testid="test-projects-page">
      <S.Imagem
        data-testid="test-image-projects-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
