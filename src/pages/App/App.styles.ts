import styled, {keyframes} from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const App = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemContent = styled.a`
  margin: 10px;
`;

export const Link = styled.a`
  color: #61dafb;
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  padding-right: 30px;
  gap: 10px;
`;

export const Texto = styled.p``;

export const TextoHeader = styled.p`
  font-size: 15px;
  color: #fff;
  cursor: pointer;
`;
