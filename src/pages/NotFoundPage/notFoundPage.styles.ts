import styled from 'styled-components';
import {Image} from 'components/image';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 116px);
`;

export const Imagem = styled(Image).attrs({
  largura: 377,
  altura: 377,
})``;
