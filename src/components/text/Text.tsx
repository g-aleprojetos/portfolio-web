import React from 'react';

import {TextStyled, TextProps} from './Text.styles';

export function Text(props: TextProps) {
  return (
    <TextStyled
      $tamanho={props.tamanho}
      $alturaDeLinha={props.alturaDeLinha}
      $marginTop={props.marginTop}
      $toUpper={props.toUpper}
      {...props}
    />
  );
}
