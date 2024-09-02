import styled from 'styled-components';
import {colors} from 'resources/colors';

export interface ExtraProps {
  'data-backgroundblack': boolean;
}

export const Container = styled.div<ExtraProps>`
  text-align: center;
  min-height: 100vh;
  background-color: ${props =>
    props['data-backgroundblack'] ? colors.background02 : colors.darkgray};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemContent = styled.div`
  margin: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Nav = styled.nav`
  display: flex;
  padding-right: 30px;
  gap: 10px;
`;

export const TextoHeader = styled.p`
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`;
