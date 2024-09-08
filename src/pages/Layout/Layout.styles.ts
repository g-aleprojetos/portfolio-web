import styled from 'styled-components';
import {colors} from 'resources/colors';

export interface ExtraProps {
  $backgroundblack: boolean;
}

export const Container = styled.div<ExtraProps>`
  text-align: center;
  min-height: 100vh;
  background-color: ${({$backgroundblack}) =>
    $backgroundblack ? colors.background02 : colors.darkgray};
`;
