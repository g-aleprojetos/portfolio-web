import React, {act} from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';

import {useBackgroundContext} from 'context/background';
import {Layout} from '../Layout';
import {colors} from 'resources/colors';
import {convertHexToRgb} from 'helper/convertHexToRgb';

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    Outlet: ({children}: {children: React.ReactNode}) => {
      return <div>{children}</div>;
    },
    Link: ({to, children}: {to: string; children: React.ReactNode}) => {
      return <a href={to}>{children}</a>;
    },
    useLocation: jest.fn().mockReturnValue({pathname: '/'}),
  };
});

jest.mock('context/background', () => ({
  useBackgroundContext: jest.fn(),
}));

const useBackgroundContextMock = useBackgroundContext as jest.Mock;

describe('Layout', () => {
  let component: RenderResult;
  const handleToggleMock = jest.fn();

  describe('Renderização', () => {
    beforeEach(() => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      act(() => {
        component = render(<Layout />);
      });
    });

    test('Deve renderizar o Layout', () => {
      const element = component.getByTestId('layout-page');
      expect(element).toBeInTheDocument();
    });

    test('Deve renderizar o Cabeçalho.', () => {
      const linkElement = component.getByTestId('header');
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
    beforeEach(() => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      act(() => {
        component = render(<Layout />);
      });
    });

    test('Deve ter a cor de fundo correta quando themeDark é false', () => {
      const element = component.getByTestId('layout-page');
      const backgroundColor = window.getComputedStyle(element).backgroundColor;
      expect(backgroundColor).toBe(`${convertHexToRgb(colors.darkgray)}`);
    });

    test('Deve ter a cor de fundo correta quando themeDark é true', () => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: true,
      });

      component.rerender(<Layout />);

      const element = component.getByTestId('layout-page');
      const backgroundColor = window.getComputedStyle(element).backgroundColor;
      expect(backgroundColor).toBe(`${convertHexToRgb(colors.background02)}`);
    });
  });
});
