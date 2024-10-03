import styled from 'styled-components';
import {Image} from 'components/image';
import {margin} from 'resources/margins';
import {media} from 'resources/media';
import {Text} from 'components/text';
import {colors} from 'resources/colors';

type PropsExtra = {
  $isActivated?: boolean;
  $backgroundblack?: boolean;
  $position?: number;
};

export const Container = styled.div<PropsExtra>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top-left-radius: ${margin.xsmall}px;
  border-top-right-radius: ${margin.xsmall}px;
  background-color: ${({$backgroundblack}) =>
    $backgroundblack ? `${colors.darkgray}` : `${colors.background01}`};
  z-index: 10;
`;

export const ContainerFooter = styled.footer`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  border-top: 10px solid ${colors.darkgray};
  background: ${colors.darkgray};

  @media screen and (${media.mobile}) {
    display: flex;
  }
`;

export const ContainerItem = styled.ul`
  display: flex;
  position: relative;
  width: 350px;
`;

export const Imagem = styled(Image).attrs<PropsExtra>(
  ({$isActivated, $backgroundblack}) => ({
    largura: margin.large,
    altura: margin.large,
    color: $isActivated
      ? colors.darkgray
      : $backgroundblack
        ? colors.background01
        : colors.darkgray,
  }),
)`
  transition: 0.3s;
`;

export const Item = styled.li<PropsExtra>`
  position: relative;
  list-style: none;
  width: 90px;
  height: 70px;
  z-index: 1;
  transform: ${({$isActivated}) =>
    $isActivated ? 'translateY(-40px)' : 'translateY(0px)'};
  transition: 0.5s;
`;

export const Navegacao = styled.a`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export const TextNavegation = styled(Text).attrs<PropsExtra>(
  ({$backgroundblack}) => ({
    color: $backgroundblack ? colors.background01 : colors.darkgray,
  }),
)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: ${({$isActivated}) => ($isActivated ? 1 : 0)};
  transform: ${({$isActivated}) =>
    $isActivated ? 'translateY(48px)' : 'translateY(20px)'};
`;

export const IndicatorPosition = (indicador?: number) => {
  switch (indicador) {
    case 0:
      return 'translateX(1px)';
    case 1:
      return 'translateX(88px)';
    case 2:
      return 'translateX(176px)';
    case 3:
      return 'translateX(264px)';
  }
};

export const Indicator = styled.div<PropsExtra>`
  display: ${({$position}) => ($position === -1 ? 'none' : 'block')};
  position: absolute;
  top: -60%;
  left: 2%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${colors.vert};
  border: 6px solid ${colors.darkgray};
  box-sizing: border-box;
  transition: transform 0.5s;
  transform: ${({$position}) => IndicatorPosition($position)};

  &::before {
    content: '';
    position: absolute;
    top: 62%;
    left: -18px;
    width: 18px;
    height: 18px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 ${colors.darkgray};
  }

  &::after {
    content: '';
    position: absolute;
    top: 62%;
    right: -18px;
    width: 18px;
    height: 18px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 ${colors.darkgray};
  }
`;
