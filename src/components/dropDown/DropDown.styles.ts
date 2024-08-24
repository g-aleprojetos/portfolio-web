import styled from 'styled-components';
import {colors} from 'resources/colors';
import {margin} from 'resources/margins';
import {Image} from 'components/image';
import {Text} from 'components/text';

interface ExtraProps {
  $open?: boolean;
  $active?: boolean;
  $clicked?: boolean;
  $rotate?: boolean;
  $themeDark?: boolean;
}

export const Caret = styled.div<ExtraProps>`
  width: 0;
  height: 0;
  border-left: ${margin.xxsmall}px solid transparent;
  border-right: ${margin.xxsmall}px solid transparent;
  border-top: ${margin.xsmall}px solid
    ${({$themeDark}) => ($themeDark ? colors.black : colors.background01)};
  transition: transform 0.3s;
  transform: ${({$rotate}) => ($rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const ContainerOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${margin.xsmall}px;
`;

export const DropdownContainer = styled.div`
  min-width: 150px;
  position: relative;
  margin: ${margin.xsmall}px;
`;

export const Flag = styled(Image).attrs({
  altura: margin.medium,
  largura: margin.medium,
})``;

export const Menu = styled.ul<ExtraProps>`
  position: absolute;
  list-style: none;
  background: ${({$themeDark}) =>
    $themeDark ? colors.background04 : colors.gunmetal};
  border: 1px solid
    ${({$themeDark}) => ($themeDark ? colors.cadetGrey : colors.charcoal)};
  box-shadow: 0 ${margin.xsmall}px ${margin.small}px rgba(0, 0, 0, 0.2);
  border-radius: ${margin.xsmall}px;
  color: ${colors.cadetGrey};
  top: ${margin.xxlarge}px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: ${({$open}) => ($open ? 1 : 0)};
  transition: opacity 0.2s;
  display: ${({$open}) => ($open ? 'block' : 'none')};
  z-index: 1;
`;

export const MenuItem = styled.li<ExtraProps>`
  display: flex;
  padding: 12px 8px;
  margin: ${margin.xxsmall}px;
  border-radius: ${margin.xsmall}px;
  cursor: pointer;
  background: ${({$active, $themeDark}) =>
    $themeDark
      ? $active
        ? colors.midGray
        : 'transparent'
      : $active
        ? colors.raisinBlack
        : 'transparent'};

  &:hover {
    background: ${({$themeDark}) =>
      $themeDark ? colors.darkerCadetGrey : colors.jet};
  }
`;

export const Select = styled.div<ExtraProps>`
  background: ${({$themeDark}) =>
    $themeDark ? colors.background02 : colors.darkgray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid
    ${({$clicked, $themeDark}) =>
      $themeDark
        ? $clicked
          ? colors.background02
          : colors.cadetGrey
        : $clicked
          ? colors.lividIndigo
          : colors.charcoalBlue};
  border-radius: ${margin.xsmall}px;
  padding: 8px 12px;
  cursor: pointer;
  transition:
    background 0.3s,
    box-shadow 0.3s;
  box-shadow: ${({$clicked, $themeDark}) =>
    $themeDark
      ? $clicked
        ? `0 0 12px ${colors.lightblue}`
        : 'none'
      : $clicked
        ? `0 0 12px ${colors.lividIndigo}`
        : 'none'};

  &:hover {
    background: ${({$themeDark}) =>
      $themeDark ? colors.darkerCadetGrey : colors.gunmetal};
  }
`;

export const Selected = styled.span`
  display: flex;
  align-items: center;
  gap: ${margin.xsmall}px;
`;

export const Texto = styled(Text).attrs<ExtraProps>(({$themeDark}) => ({
  color: $themeDark ? colors.background01 : colors.black,
  cursor: 'pointer',
}))``;
