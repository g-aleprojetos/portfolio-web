import styled from 'styled-components';
import {colors} from 'resources/colors';

export interface ExtraProps {
  $backgroundblack: boolean;
}

export const Container = styled.div<ExtraProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({$backgroundblack}) =>
    $backgroundblack ? colors.background02 : colors.darkgray};
`;

export const Content = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 116px;
  margin-bottom: 70px;
  overflow-y: auto;
`;
