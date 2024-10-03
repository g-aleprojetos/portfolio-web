import React from 'react';
import manutencao from 'assets/images/manutencao.svg';
import {useBackgroundContext} from 'context/background';

import * as S from './projectsPage.styles';

export const ProjectsPage = () => {
  const {themeDark} = useBackgroundContext();

  return (
    <S.Container data-testid="test-projects-page">
      <S.Title $backgroundblack={themeDark}>ProjectsPage</S.Title>
      <S.Imagem
        data-testid="test-image-projects-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
