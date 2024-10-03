import '@testing-library/jest-dom';
import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {useBackgroundContext} from 'context/background';
import {Header} from '../Header';
import {colors} from 'resources/colors';
import {useCurrentPageContext} from 'context/routesContext';
import {InternalRoutes} from 'resources/enun/InternalRoutes';

jest.mock('context/background', () => ({
  useBackgroundContext: jest.fn(),
}));

jest.mock('context/routesContext', () => ({
  useCurrentPageContext: jest.fn(),
}));

const useBackgroundContextMock = useBackgroundContext as jest.Mock;
const useCurrentPageContextMock = useCurrentPageContext as jest.Mock;

describe('Header', () => {
  let component: RenderResult;
  const handleToggleMock = jest.fn();
  const handleCurrentPageMock = jest.fn();

  describe('Renderização', () => {
    beforeEach(() => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      useCurrentPageContextMock.mockReturnValue({
        currentPage: InternalRoutes.Home,
        handleCurrentPage: handleCurrentPageMock,
      });
      component = render(<Header />);
    });
    test('Deve renderizar o Cabeçalho.', () => {
      const linkElement = component.getByTestId('header');
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "Home".', () => {
      const linkElement = component.getByText(/Home/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "Projets".', () => {
      const linkElement = component.getByText(/Projects/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "About Us".', () => {
      const linkElement = component.getByText(/About Us/i);
      expect(linkElement).toBeInTheDocument();
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
      handleCurrentPageMock.mockClear();
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      useCurrentPageContextMock.mockReturnValue({
        currentPage: InternalRoutes.Home,
        handleCurrentPage: handleCurrentPageMock,
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

    test('Deve aplicar estilo ativado ao Home QUANDO estiver na página Home', () => {
      const homeContent = component.getByTestId('home-item-content');
      const projectsContent = component.getByTestId('projects-item-content');
      const aboutPageContent = component.getByTestId('about-item-content');
      expect(homeContent).toHaveStyle(
        `border-bottom: 2px solid ${colors.background01}`,
      );
      expect(projectsContent).toHaveStyle(
        'border-bottom: 2px solid transparent',
      );
      expect(aboutPageContent).toHaveStyle(
        'border-bottom: 2px solid transparent',
      );
    });

    test('Deve aplicar estilo ativado ao "Projects" QUANDO estiver na página Projects"', () => {
      useCurrentPageContextMock.mockReturnValueOnce({
        currentPage: InternalRoutes.Projects,
        handleCurrentPage: jest.fn(),
      });
      component.rerender(<Header />);
      const homeContent = component.getByTestId('home-item-content');
      const projectsContent = component.getByTestId('projects-item-content');
      const aboutPageContent = component.getByTestId('about-item-content');
      expect(homeContent).toHaveStyle('border-bottom: 2px solid transparent');
      expect(projectsContent).toHaveStyle(
        `border-bottom: 2px solid ${colors.background01}`,
      );
      expect(aboutPageContent).toHaveStyle(
        'border-bottom: 2px solid transparent',
      );
    });

    test('Deve aplicar estilo ativado ao "About" QUANDO estiver na página About', () => {
      useCurrentPageContextMock.mockReturnValueOnce({
        currentPage: InternalRoutes.About,
        handleCurrentPage: jest.fn(),
      });
      component.rerender(<Header />);
      const homeContent = component.getByTestId('home-item-content');
      const projectsContent = component.getByTestId('projects-item-content');
      const aboutPageContent = component.getByTestId('about-item-content');
      expect(homeContent).toHaveStyle('border-bottom: 2px solid transparent');
      expect(projectsContent).toHaveStyle(
        'border-bottom: 2px solid transparent',
      );
      expect(aboutPageContent).toHaveStyle(
        `border-bottom: 2px solid ${colors.background01}`,
      );
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

    test('Deve chamar o handleCurrentPageMock com a rota Projects QUANDO estiver outra página e clicar no Projects', () => {
      fireEvent.click(component.getByText(/Projects/i));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(
        InternalRoutes.Projects,
      );
    });

    test('Deve chamar o handleCurrentPageMock com a rota About QUANDO estiver outra página e clicar no About', () => {
      fireEvent.click(component.getByText(/About/i));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(InternalRoutes.About);
    });

    test('Deve chamar o handleCurrentPageMock com a rota home QUANDO estiver outra página e clicar no Home', () => {
      useCurrentPageContextMock.mockReturnValueOnce({
        currentPage: InternalRoutes.About,
        handleCurrentPage: handleCurrentPageMock,
      });
      component.rerender(<Header />);
      fireEvent.click(component.getByText(/Home/i));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(InternalRoutes.Home);
    });

    test('Deve chamar o handleCurrentPageMock com a rota home QUANDO estiver outra página e clicar no Logo', () => {
      useCurrentPageContextMock.mockReturnValueOnce({
        currentPage: InternalRoutes.About,
        handleCurrentPage: handleCurrentPageMock,
      });
      component.rerender(<Header />);
      fireEvent.click(component.getByTestId('test-image-logo'));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(InternalRoutes.Home);
    });

    test('Deve mudar os textos do header para "Português" Quando clicar no botão "Português"', () => {
      const dropdown = component.getByTestId('dropdown-select');
      fireEvent.click(dropdown);
      const idiomaPortugues = component.getByTestId('idioma-portugues');
      fireEvent.click(idiomaPortugues);
      expect(component.getByText(/Pagina Inicial/i)).toBeDefined();
      expect(component.getByText(/projetos/i)).toBeDefined();
      expect(component.getByText(/Sobre/i)).toBeDefined();
    });

    test('Deve mudar os textos do header para "Français" Quando clicar no botão "Français"', () => {
      const dropdown = component.getByTestId('dropdown-select');
      fireEvent.click(dropdown);
      const idiomaFrances = component.getByTestId('idioma-frances');
      fireEvent.click(idiomaFrances);
      expect(component.getByText(/Accueil/i)).toBeDefined();
      expect(component.getByText(/Projets/i)).toBeDefined();
      expect(component.getByText(/À propos/i)).toBeDefined();
    });
  });
});
