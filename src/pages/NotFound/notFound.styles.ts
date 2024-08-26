import styled from 'styled-components';
import sizes from 'resources/sizes';
import {Image} from 'components/image';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Imagem = styled(Image).attrs({
  largura: sizes.px377,
  altura: sizes.px377,
})``;
