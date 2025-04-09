import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import styled from 'styled-components';

export interface PropsHumburger {
  tamanho?: 8 | 16 | 24 | 32 | 48;
  openMenu?: boolean;
  mudarEstado: () => void;
}

export interface Props {
  $open?: boolean;
  $tamanho?: number;
}

export const Container = styled.button<Props>`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: ${({$tamanho}) => $tamanho ?? margin.small}px;
  height: ${({$tamanho}) => $tamanho ?? margin.small}px;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 100;
`;

const Span = styled.span<Props>`
  width: 100%;
  height: ${margin.xxxsmall}px;
  background-color: ${colors.background01};
  border-radius: ${margin.xsmall}px;
  transform-origin: ${margin.xxxsmall}px;
  transition: all 0.3s linear;
`;

export const SpanSuperior = styled(Span)`
  transform: ${({$open}) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const SpanMeio = styled(Span)`
  opacity: ${({$open}) => ($open ? 0 : 1)};
`;

export const SpanInferior = styled(Span)`
  transform: ${({$open}) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
`;
