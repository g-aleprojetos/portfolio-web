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
        component = render(
          <Layout>
            <div data-testid="child-element">Child Content</div>
          </Layout>,
        );
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

    test('Deve renderizar os filhos.', () => {
      const childElement = component.getByTestId('child-element');
      expect(childElement).toBeInTheDocument();
      expect(childElement).toHaveTextContent('Child Content');
    });

    test('NÃO deve renderizar o Sidebar.', () => {
      const sidebar = component.getByTestId('sidebar');
      sidebar.style.display = 'none';
      expect(window.getComputedStyle(sidebar).display).toBe('none');
    });

    test('NÃO deve renderizar o Footer.', () => {
      const footer = component.getByTestId('footer');
      footer.style.display = 'none';
      expect(window.getComputedStyle(footer).display).toBe('none');
    });

    describe('Sidebar', () => {
      beforeEach(() => {
        useBackgroundContextMock.mockReturnValue({
          handleToggle: handleToggleMock,
          themeDark: false,
        });
        act(() => {
          component.rerender(
            <Layout>
              <div data-testid="child-element">Child Content</div>
            </Layout>,
          );
        });
      });

      test('Deve renderizar o Sidebar QUANDO a largura da tela está entre 768px e 1023px', () => {
        const sidebar = component.getByTestId('sidebar');

        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          value: 768,
        });
        window.dispatchEvent(new Event('resize'));

        sidebar.style.display = 'flex';
        expect(window.getComputedStyle(sidebar).display).toBe('flex');
      });

      test('Deve ter o display "none" no Sidebar QUANDO a largura da tela é menor que 768px', () => {
        const sidebar = component.getByTestId('sidebar');

        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          value: 767,
        });
        window.dispatchEvent(new Event('resize'));

        sidebar.style.display = 'none';
        expect(window.getComputedStyle(sidebar).display).toBe('none');
      });

      test('Deve ter o display "none" no Sidebar QUANDO a largura da tela é maior que 1023px', () => {
        const sidebar = component.getByTestId('sidebar');
        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          value: 1024,
        });
        window.dispatchEvent(new Event('resize'));

        sidebar.style.display = 'none';
        expect(window.getComputedStyle(sidebar).display).toBe('none');
      });
    });

    describe('footer', () => {
      beforeEach(() => {
        useBackgroundContextMock.mockReturnValue({
          handleToggle: handleToggleMock,
          themeDark: false,
        });
        act(() => {
          component.rerender(
            <Layout>
              <div data-testid="child-element">Child Content</div>
            </Layout>,
          );
        });
      });

      test('Deve renderizar o Footer QUANDO a largura da tela é 425px ou menor', () => {
        const footer = component.getByTestId('footer');

        Object.defineProperty(footer, 'offsetWidth', {
          configurable: true,
          value: 425,
        });

        footer.style.display = 'flex';

        expect(footer).toBeInTheDocument();
        expect(window.getComputedStyle(footer).display).toBe('flex');
      });

      test('Deve ter o display "none" no Footer QUANDO a largura da tela é maior que 425px', () => {
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
});
