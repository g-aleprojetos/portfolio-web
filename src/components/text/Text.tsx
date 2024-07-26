import React from 'react';

import {TextoStyled, Props} from './Text.styles';

export function Texto(props: Props) {
  return (
    <TextoStyled
      $tamanho={props.tamanho}
      $alturaDeLinha={props.alturaDeLinha}
      $marginTop={props.marginTop}
      $toUpper={props.toUpper}
      {...props}
    />
  );
}
