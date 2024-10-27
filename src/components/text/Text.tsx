import React from 'react';
import {TextStyled, TextProps} from './Text.styles';

export function Text(props: TextProps) {
  const {
    tamanho,
    alturaDeLinha,
    marginTop,
    toUpper,
    fontWeight,
    type = 'p',
    ...rest
  } = props;

  return (
    <TextStyled
      as={type}
      $tamanho={tamanho}
      $alturaDeLinha={alturaDeLinha}
      $marginTop={marginTop}
      $toUpper={toUpper}
      $fontWeight={fontWeight}
      {...rest}
    />
  );
}
