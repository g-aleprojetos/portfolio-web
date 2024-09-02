import React from 'react';
import {fireEvent, render, RenderResult, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {useBackgroundContext} from 'context/background';
import {Layout} from '../Layout';
import routes from 'resources/routes';
// import {Outlet} from 'react-router-dom';
// import {Link} from 'react-router-dom';

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
      component = render(<Layout />);
    });

    test('Deve renderizar o Layout', () => {
      const element = screen.getByTestId('layout-page');
      expect(element).toBeInTheDocument();
    });

    describe('Header', () => {
      test('Deve renderizar o texto "Pagina Inicial".', () => {
        const linkElement = component.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve renderizar o texto "Conteudo".', () => {
        const linkElement = component.getByText(/Contents/i);
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve renderizar o texto "sobre".', () => {
        const linkElement = component.getByText(/About Us/i);
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve ter o link correto para Home', () => {
        const homeLink = screen.getByText(/Home/i).closest('a');
        expect(homeLink).toHaveAttribute('href', routes.Home);
      });

      test('Deve ter o link correto para Projects', () => {
        const projectsLink = screen.getByText(/Contents/i).closest('a');
        expect(projectsLink).toHaveAttribute('href', routes.Projects);
      });

      test('Deve ter o link correto para About', () => {
        const aboutLink = screen.getByText(/About Us/i).closest('a');
        expect(aboutLink).toHaveAttribute('href', routes.About);
      });

      test('Deve renderizar o ToggleSwitch', () => {
        const toggleSwitch = component.getByTestId('toggleSwitch');
        expect(toggleSwitch).toBeInTheDocument();
      });
    });
  });

  describe('Comportamento', () => {
    beforeEach(() => {
      handleToggleMock.mockClear();
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      component = render(<Layout />);
    });

    test('Deve abrir o dropdown quando clicado', () => {
      const dropdown = component.getByTestId('dropdown-select');
      fireEvent.click(dropdown);

      const dropdownMenu = screen.getByTestId('dropdown-menu');
      expect(dropdownMenu).toBeVisible();
    });

    test('Deve ter data-backgroundblack como false quando themeDark é false', () => {
      const element = screen.getByTestId('layout-page');
      expect(element).toHaveAttribute('data-backgroundblack', 'false');
    });

    test('Deve ter data-backgroundblack como true quando themeDark é true', () => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: true,
      });

      component.rerender(<Layout />);

      const element = screen.getByTestId('layout-page');
      expect(element).toHaveAttribute('data-backgroundblack', 'true');
    });

    test('Deve chamar handleToggle quando o ToggleSwitch é clicado', () => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });

      component.rerender(<Layout />);

      const toggleSwitch = component.getByTestId('toggleSwitch');
      fireEvent.click(toggleSwitch);

      expect(handleToggleMock).toHaveBeenCalled();
    });

    test('Deve mudar os textos do header para "Português" Quando clicar no botão "Português"', () => {
      const dropdown = component.getByTestId('dropdown-select');
      fireEvent.click(dropdown);
      const idiomaPortugues = component.getByTestId('idioma-portugues');
      fireEvent.click(idiomaPortugues);
      expect(component.getByText(/Pagina Inicial/i)).toBeDefined();
      expect(component.getByText(/Conteúdo/i)).toBeDefined();
      expect(component.getByText(/Sobre/i)).toBeDefined();
    });

    test('Deve mudar os textos do header para "Français" Quando clicar no botão "Français"', () => {
      const dropdown = component.getByTestId('dropdown-select');
      fireEvent.click(dropdown);
      const idiomaFrances = component.getByTestId('idioma-frances');
      fireEvent.click(idiomaFrances);
      expect(component.getByText(/Accueil/i)).toBeDefined();
      expect(component.getByText(/Contenu/i)).toBeDefined();
      expect(component.getByText(/À propos/i)).toBeDefined();
    });
  });
});
