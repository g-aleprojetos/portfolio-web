import styled, {css} from 'styled-components';
import {colors} from 'resources/colors';
import fonts from 'resources/fonts';
import texts from 'resources/texts';

export type Props = {
  id?: string;
  cor?: string;
  tamanho?: 12 | 14 | 16 | 18 | 24;
  alturaDeLinha?: 18 | 22 | 24 | 26 | 34;
  marginTop?: number;
  children?: string | React.ReactNode;
  peso?: 'bold' | 'medium';
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text';
};

interface TextProps {
  $tamanho?: number;
  $alturaDeLinha?: number;
  $marginTop?: number;
  $toUpper?: boolean;
}

export const TextStyled = styled.p<Props & TextProps>`
  font-size: ${({$tamanho}) => $tamanho ?? texts.tamanho.xxsmall}px;
  font-family: ${({peso}) =>
    peso === 'bold' ? fonts.avertaBold : fonts.avertaRegular};
  color: ${({cor}) => cor ?? colors.white};
  margin-top: ${({$marginTop}) => $marginTop ?? 0}px;
  text-transform: ${({$toUpper}) => ($toUpper ? 'uppercase' : 'none')};
  cursor: ${({cursor}) => cursor ?? 'text'};
  ${({$alturaDeLinha}) =>
    $alturaDeLinha &&
    css`
      line-height: ${$alturaDeLinha}px;
    `}
`;
