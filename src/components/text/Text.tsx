import React from 'react';
import {TextStyled, TextProps} from './Text.styles';

export function Text(props: TextProps) {
  const {
    tamanho,
    alturaDeLinha,
    marginTop,
    toUpper,
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
      {...rest}
    />
  );
}
