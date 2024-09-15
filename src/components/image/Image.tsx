import React from 'react';
import {ContainerImage, ImageStyled, Svg, Props} from './Image.styles';

interface IconeProps extends Props {
  testId?: string;
  src: string;
  alt?: string;
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
  color,
  ...props
}: Readonly<IconeProps>) => {
  const isSvg = src.endsWith('.svg');

  if (typeof largura === 'number') {
    largura = `${largura}px`;
  }

  if (typeof altura === 'number') {
    altura = `${altura}px`;
  }

  return (
    <ContainerImage
      data-testid="container-image"
      $largura={largura}
      $altura={altura}
      {...props}>
      {isSvg ? (
        <Svg
          data-testid={testId ? `${testId}-svg` : 'svg'}
          src={src}
          title={alt}
          color={color}
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
          cursor={cursor}
          $inclinacao={inclinacao}
          $spinner={spinner}
          $velocidadeSpinner={velocidadeSpinner}
        />
      )}
    </ContainerImage>
  );
};
