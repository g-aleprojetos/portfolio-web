import React from 'react';

import {TextStyled, Props} from './Text.styles';

export function Text(props: Props) {
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
