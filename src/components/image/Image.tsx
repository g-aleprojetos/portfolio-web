import React from 'react';
import {ImageStyled, Svg, Props} from './Image.styles';

interface IconeProps extends Props {
  testId?: string;
  src: string;
  alt?: string;
  cor?: string;
  spinner?: boolean;
  velocidadeSpinner?: number;
}

export const Image = ({
  testId,
  src,
  alt,
  cursor,
  altura = 32,
  largura = 32,
  inclinacao = 0,
  spinner = false,
  velocidadeSpinner = 0,
  cor,
  ...props
}: Readonly<IconeProps>) => {
  const isSvg = src.endsWith('.svg');

  return (
    <>
      {isSvg ? (
        <Svg
          data-testid={testId ? `${testId}-svg` : 'svg'}
          src={src}
          cor={cor}
          width={largura}
          height={altura}
          cursor={cursor}
          $inclinacao={inclinacao}
          $spinner={spinner}
          $velocidadeSpinner={velocidadeSpinner}
        />
      ) : (
        <ImageStyled
          data-testid={testId ? `${testId}-img` : 'img'}
          src={src}
          alt={alt}
          width={largura}
          height={altura}
          cursor={cursor}
          $inclinacao={inclinacao}
          $spinner={spinner}
          $velocidadeSpinner={velocidadeSpinner}
          {...props}
        />
      )}
    </>
  );
};
