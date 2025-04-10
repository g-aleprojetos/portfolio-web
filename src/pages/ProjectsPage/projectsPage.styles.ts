import styled from 'styled-components';
import {Image} from 'components/image';
import {Text} from 'components/text';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import {devices} from 'resources/media';

export interface ExtraProps {
  $backgroundblack?: boolean;
}

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${devices.tablet}px) and (max-width: ${devices.laptop}px) {
    padding-left: ${margin.xxlarge}px;
  }
`;

export const Imagem = styled(Image).attrs({
  largura: 377,
  altura: 377,
})``;

export const Title = styled(Text).attrs<ExtraProps>(({$backgroundblack}) => ({
  tamanho: 14,
  type: 'h3',
  color: $backgroundblack ? colors.black : colors.background01,
  marginTop: 0,
  cursor: 'default',
  toUpper: true,
}))``;
