import styled, {keyframes, css} from 'styled-components';
import InlineSVG from 'react-inlinesvg';

export interface Props {
  alt?: string;
  cor?: string;
  altura?: number | string;
  largura?: number | string;
  cursor?: 'default' | 'pointer';
  inclinacao?: number;
  spinner?: boolean;
  velocidadeSpinner?: number;
}

interface ExtraProps {
  $spinner?: boolean;
  $velocidadeSpinner?: number;
  $inclinacao?: number;
  $altura?: string;
  $largura?: string;
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

export const ContainerImage = styled.div<ExtraProps>`
  display: flex;
  width: ${({$largura}) => $largura};
  height: ${({$altura}) => $altura};
  box-sizing: border-box;
`;

export const ImageStyled = styled.img<Props & ExtraProps>`
  pointer-events: ${({cursor}) => (cursor === 'default' ? 'none' : 'auto')};
  cursor: ${({cursor}) => cursor ?? 'default'};
  transform: rotate(${({$inclinacao}) => $inclinacao}deg);
  ${({$spinner, $velocidadeSpinner}) =>
    $spinner && $velocidadeSpinner && spinnerAnimation($velocidadeSpinner)}
`;

export const Svg = styled(InlineSVG).attrs<Props & ExtraProps>(
  ({cor, $inclinacao}) => ({
    style: {
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
