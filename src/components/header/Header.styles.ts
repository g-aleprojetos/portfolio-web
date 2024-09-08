import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors} from 'resources/colors';
import {Image} from 'components/image';
import {Text} from 'components/text';
import {media} from 'resources/media';
import {margin} from 'resources/margins';

export interface ExtraProps {
  $backgroundblack?: boolean;
  $isActivated?: boolean;
}

export const ContainerLogo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

  @media screen and (${media.tablet}) {
    position: fixed;
    padding: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 116px;
  padding-top: ${margin.small}px;
  padding-left: ${margin.xxlarge}px;
  box-sizing: border-box;

  @media screen and (${media.tablet}) {
    justify-content: center;
  }
`;

export const Imagem = styled(Image)<ExtraProps>`
  width: ${margin.xxxlarge}px;
  height: ${margin.xxxlarge}px;
  cursor: ${({$isActivated}) => ($isActivated ? 'default' : 'pointer')};
  @media screen and (${media.mobile}) {
    width: ${margin.xxlarge}px;
    height: ${margin.xxlarge}px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemContent = styled.div<ExtraProps>`
  margin: ${margin.xsmall}px;
  border-bottom: ${margin.xxxsmall}px solid
    ${({$backgroundblack, $isActivated}) =>
      $isActivated
        ? $backgroundblack
          ? colors.black
          : colors.background01
        : 'transparent'};
  padding-bottom: ${margin.xsmall}px;
  transition:
    border-bottom-color 0.3s ease,
    border-bottom-width 0.3s ease;
`;

export const Nav = styled.nav`
  display: flex;
  padding-right: ${margin.large}px;
  gap: ${margin.xsmall}px;

  @media screen and (${media.tablet}) {
    display: none;
  }
`;

export const Navegacao = styled(Link)`
  text-decoration: none;
`;

export const TextoHeader = styled(Text).attrs<ExtraProps>(
  ({$backgroundblack, $isActivated}) => ({
    tamanho: 14,
    type: 'h3',
    color: $backgroundblack ? colors.black : colors.background01,
    marginTop: 0,
    cursor: $isActivated ? 'default' : 'pointer',
    toUpper: true,
  }),
)``;
