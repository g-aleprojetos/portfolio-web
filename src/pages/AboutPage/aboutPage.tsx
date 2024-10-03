import React from 'react';
import manutencao from 'assets/images/manutencao.svg';
import {useBackgroundContext} from 'context/background';

import * as S from './aboutPage.styles';

export const AboutPage = () => {
  const {themeDark} = useBackgroundContext();

  return (
    <S.Container data-testid="test-about-page">
      <S.Title $backgroundblack={themeDark}>AboutPage</S.Title>
      <S.Imagem
        data-testid="test-image-about-page"
        alt="manutencao"
        src={manutencao}
      />
    </S.Container>
  );
};
