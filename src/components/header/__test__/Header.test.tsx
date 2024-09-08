import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useBackgroundContext} from 'context/background';
import {Header} from '../Header';
import routes from 'resources/routes';
import {useLocation} from 'react-router-dom';
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
const useLocationMock = useLocation as jest.Mock;

describe('Header', () => {
  let component: RenderResult;
  const handleToggleMock = jest.fn();

  describe('Renderização', () => {
    beforeEach(() => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      component = render(<Header />);
    });
    test('Deve renderizar o Cabeçalho.', () => {
      const linkElement = component.getByTestId('header');
      expect(linkElement).toBeInTheDocument();
    });

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
      const homeLink = component.getByText(/Home/i).closest('a');
      expect(homeLink).toHaveAttribute('href', routes.Home);
    });

    test('Deve ter o link correto para Projects', () => {
      const projectsLink = component.getByText(/Contents/i).closest('a');
      expect(projectsLink).toHaveAttribute('href', routes.Projects);
    });

    test('Deve ter o link correto para About', () => {
      const aboutLink = component.getByText(/About Us/i).closest('a');
      expect(aboutLink).toHaveAttribute('href', routes.About);
    });

    test('Deve renderizar o ToggleSwitch', () => {
      const toggleSwitch = component.getByTestId('toggleSwitch');
      expect(toggleSwitch).toBeInTheDocument();
    });

    test('DEVE renderizar o logo corretamente', () => {
      const logoElement = component.getByTestId('test-image-logo');
      expect(logoElement).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
    beforeEach(() => {
      handleToggleMock.mockClear();
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      component = render(<Header />);
    });

    test('Deve abrir o dropdown quando clicado', () => {
      const dropdown = component.getByTestId('dropdown-select');
      fireEvent.click(dropdown);

      const dropdownMenu = component.getByTestId('dropdown-menu');
      expect(dropdownMenu).toBeVisible();
    });

    test('Deve chamar handleToggle quando o ToggleSwitch é clicado', () => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });

      component.rerender(<Header />);

      const toggleSwitch = component.getByTestId('toggleSwitch');
      fireEvent.click(toggleSwitch);

      expect(handleToggleMock).toHaveBeenCalled();
    });

    test('Deve aplicar estilo ativado ao link "Home" quando o pathname for "/"', () => {
      const homeText = component.getByText(/home/i);
      expect(homeText).toHaveStyle(
        `color: ${convertHexToRgb(colors.background01)}`,
      );
      const homeItem = homeText.closest('a');
      expect(homeItem).toHaveAttribute('href', routes.Home);
    });

    test('Deve aplicar estilo ativado ao link "Projects" quando o pathname for "/projects"', () => {
      useLocationMock.mockReturnValue({pathname: routes.Projects});
      component.rerender(<Header />);
      const projectsText = component.getByText(/contents/i);
      expect(projectsText).toHaveStyle(
        `color: ${convertHexToRgb(colors.background01)}`,
      );
      const projectsItem = projectsText.closest('a');
      expect(projectsItem).toHaveAttribute('href', routes.Projects);
    });

    test('Deve aplicar estilo ativado ao link "About" quando o pathname for "/about"', () => {
      useLocationMock.mockReturnValue({pathname: routes.About});
      component.rerender(<Header />);
      const aboutText = component.getByText(/about/i);
      expect(aboutText).toHaveStyle(
        `color: ${convertHexToRgb(colors.background01)}`,
      );
      const aboutItem = aboutText.closest('a');
      expect(aboutItem).toHaveAttribute('href', routes.About);
    });

    test('Deve alternar o tema ao clicar no ToggleSwitch', () => {
      const toggleSwitch = component.getByTestId('toggleSwitch');
      fireEvent.click(toggleSwitch);
      expect(handleToggleMock).toHaveBeenCalledTimes(1);
    });

    test('Deve renderizar corretamente o dropdown', () => {
      const dropdown = component.getByTestId('dropdown-select');
      expect(dropdown).toBeInTheDocument();
    });

    test('Deve aplicar o estilo "ativo" ao item do menu correspondente ao pathname', () => {
      useLocationMock.mockReturnValue({pathname: routes.About});
      component.rerender(<Header />);

      const aboutItemContent = component.getByText(/about/i).closest('div');
      expect(aboutItemContent).toBeInTheDocument();

      if (aboutItemContent) {
        const borderBottomColor =
          window.getComputedStyle(aboutItemContent).borderBottomColor;
        const expectedColor = colors.background01;
        expect(borderBottomColor).toBe(expectedColor);
      }
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
