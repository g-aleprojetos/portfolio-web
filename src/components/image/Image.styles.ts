import styled, {keyframes, css} from 'styled-components';
import InlineSVG from 'react-inlinesvg';

export interface Props {
  alt?: string;
  cor?: string;
  altura?: number;
  largura?: number;
  cursor?: 'default' | 'pointer';
  inclinacao?: number;
  spinner?: boolean;
  velocidadeSpinner?: number;
}

interface ExtraProps {
  $spinner?: boolean;
  $velocidadeSpinner?: number;
  $inclinacao?: number;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinnerAnimation = (velocidade: number) => css`
  animation: ${spin} infinite ${velocidade}s linear;
`;

export const ImageStyled = styled.img<Props & ExtraProps>`
  pointer-events: ${({cursor}) => (cursor === 'default' ? 'none' : 'auto')};
  cursor: ${({cursor}) => cursor ?? 'default'};
  transform: rotate(${({$inclinacao}) => $inclinacao}deg);
  width: ${({largura}) => largura}px;
  height: ${({altura}) => altura}px;
  ${({$spinner, $velocidadeSpinner}) =>
    $spinner && $velocidadeSpinner && spinnerAnimation($velocidadeSpinner)}
`;

export const Svg = styled(InlineSVG).attrs<Props & ExtraProps>(
  ({cor, altura, largura, $inclinacao}) => ({
    style: {
      width: largura,
      height: altura,
      fill: cor,
      transform: `rotate(${$inclinacao}deg)`,
    },
  }),
)<Props & ExtraProps>`
  pointer-events: ${({cursor}) => (cursor === 'default' ? 'none' : 'auto')};
  cursor: ${({cursor}) => cursor ?? 'default'};
  ${({$spinner, $velocidadeSpinner}) =>
    $spinner && $velocidadeSpinner && spinnerAnimation($velocidadeSpinner)}
`;
