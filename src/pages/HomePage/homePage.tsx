import React from 'react';
import manutencao from 'assets/images/manutencao.svg';
import {useBackgroundContext} from 'context/background';

import * as S from './homePage.styles';

export const HomePage = () => {
  const {themeDark} = useBackgroundContext();
  return (
    <S.Container data-testid="test-home-page">
      <S.Title $backgroundblack={themeDark}>HomePage</S.Title>
      <S.Imagem
        data-testid="test-image-home-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
