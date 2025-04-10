import styled from 'styled-components';
import {Image} from 'components/image';
import {margin} from 'resources/margins';
import {devices} from 'resources/media';
import {Text} from 'components/text';
import {colors} from 'resources/colors';
import {Hamburger} from '../hamburger';

type PropsExtra = {
  $isActivated?: boolean;
  $backgroundblack?: boolean;
  $position?: number;
  $openMenu?: boolean;
};

export const BotaoMenu = styled.button<PropsExtra>`
  display: flex;
  align-items: center;
  gap: ${margin.small}px;
  height: ${margin.xxlarge}px;
  width: 100%;
  padding: 0 16px;
  color: rgba(255, 255, 255, 0.6);
  background: ${({$isActivated}) =>
    $isActivated ? 'rgba(0, 0, 0, 0.35)' : 'transparent'};
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`;

export const Container = styled.aside<PropsExtra>`
  display: none;
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: ${margin.large}px;
  width: ${({$openMenu}) => ($openMenu ? '260' : '64')}px;
  height: 100vh;
  background: ${colors.midnightBlue};
  transition: width 0.4s;
  z-index: 2;

  @media screen and (min-width: ${devices.mobilePlus}px) and (max-width: ${devices.laptop}px) {
    display: flex;
  }
`;

export const HeaderSidebar = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.15);
`;

export const IconeHanburger = styled(Hamburger).attrs({
  tamanho: 24,
})``;

export const Imagem = styled(Image).attrs({
  largura: 32,
  altura: 32,
  color: colors.background01,
})``;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 260px;
`;

export const MenuSidebar = styled.nav`
  position: relative;
  display: grid;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: ${margin.xxlarge}px;
    width: ${margin.xxsmall}px;
    background: ${colors.vividIndigo};
    transition: top 0.5s;
  }
`;

export const TextoHeaderSidebar = styled(Text).attrs({
  type: 'h1',
  tamanho: 18,
  color: colors.background01,
  fontWeight: 500,
})`
  margin-left: ${margin.large}px;
`;

export const TextoBotao = styled(TextoHeaderSidebar).attrs({
  type: 'h3',
})`
  margin-left: ${margin.small}px;
`;
