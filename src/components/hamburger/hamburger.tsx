import React from 'react';
import * as S from './hamburger.styles';

export const Hamburger = (props: S.PropsHumburger) => {
  const {tamanho, openMenu = false, mudarEstado} = props;

  return (
    <S.Container
      data-testid="test_hamburger"
      $tamanho={tamanho}
      onClick={mudarEstado}>
      <S.SpanSuperior $open={openMenu} />
      <S.SpanMeio $open={openMenu} />
      <S.SpanInferior $open={openMenu} />
    </S.Container>
  );
};
