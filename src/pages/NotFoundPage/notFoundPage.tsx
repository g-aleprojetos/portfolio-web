import React from 'react';
import manutencao from 'assets/images/manutencao.svg';
import {useBackgroundContext} from 'context/background';

import * as S from './notFoundPage.styles';

export const NotFoundPage = () => {
  const {themeDark} = useBackgroundContext();

  return (
    <S.Container data-testid="test-notFound-page">
      <S.Title $backgroundblack={themeDark}>NotFoundPage</S.Title>
      <S.Imagem
        data-testid="test-image-notFound-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
