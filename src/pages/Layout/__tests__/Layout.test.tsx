import React, {act} from 'react';
import {render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useBackgroundContext} from 'context/background';
import {Layout} from '../Layout';

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

    test('Deve renderizar o Footer quando a largura da tela é 425px ou menor', () => {
      const footer = component.getByTestId('footer');

      Object.defineProperty(footer, 'offsetWidth', {
        configurable: true,
        value: 425,
      });

      footer.style.display = 'flex';

      expect(footer).toBeInTheDocument();
      expect(window.getComputedStyle(footer).display).toBe('flex');
    });

    test('Deve ter o display "none" no Footer quando a largura da tela é maior que 425px', () => {
      const footer = component.getByTestId('footer');

      Object.defineProperty(footer, 'offsetWidth', {
        configurable: true,
        value: 426,
      });

      footer.style.display = 'none';
      expect(window.getComputedStyle(footer).display).toBe('none');
    });
  });
});
