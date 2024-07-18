import styled from 'styled-components';
import {colors} from 'resources/colors';

export interface ExtraProps {
  'data-backgroundblack': boolean;
}

export const Container = styled.div<ExtraProps>`
  text-align: center;
  min-height: 100vh;
  background-color: ${props =>
    props['data-backgroundblack'] ? colors.lightgray : colors.darkgray};
`;
