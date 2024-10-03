import '@testing-library/jest-dom';
import React, {act} from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {useBackgroundContext} from 'context/background';
import {useCurrentPageContext} from 'context/routesContext';
import {Footer} from '../footer';
import {InternalRoutes} from 'resources/enun/InternalRoutes';

jest.mock('context/background', () => ({
  useBackgroundContext: jest.fn(),
}));

jest.mock('context/routesContext', () => ({
  useCurrentPageContext: jest.fn(),
}));

const useBackgroundContextMock = useBackgroundContext as jest.Mock;
const useCurrentPageContextMock = useCurrentPageContext as jest.Mock;

describe('Footer', () => {
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
      act(() => {
        component = render(<Footer />);
      });
    });

    test('Deve renderizar o Rodapé.', () => {
      const linkElement = component.getByTestId('footer');
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o Container do Rodapé.', () => {
      const linkElement = component.getByTestId('container-footer');
      expect(linkElement).toBeInTheDocument();
    });

    describe('Renderização do Item Home', () => {
      test('Deve renderizar o Imagem Home do Rodapé.', () => {
        const linkElement = component.getByTestId('test-image-icon-home');
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve renderizar o TextNavegation com o texto Home.', () => {
        const linkElement = component.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
      });
    });

    describe('Renderização do Item Projects', () => {
      test('Deve renderizar o Imagem Projects do Rodapé.', () => {
        const linkElement = component.getByTestId('test-image-icon-projects');
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve renderizar o TextNavegation com o texto Projects.', () => {
        const linkElement = component.getByText(/Projects/i);
        expect(linkElement).toBeInTheDocument();
      });
    });

    describe('Renderização do Item About', () => {
      test('Deve renderizar o Imagem About do Rodapé.', () => {
        const linkElement = component.getByTestId('test-image-icon-about');
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve renderizar o TextNavegation com o texto About.', () => {
        const linkElement = component.getByText(/About Us/i);
        expect(linkElement).toBeInTheDocument();
      });
    });

    describe('Renderização do Item Settings', () => {
      test('Deve renderizar o Imagem Settings do Rodapé.', () => {
        const linkElement = component.getByTestId('test-image-icon-settings');
        expect(linkElement).toBeInTheDocument();
      });

      test('Deve renderizar o TextNavegation com o texto Settings.', () => {
        const linkElement = component.getByText(/Settings/i);
        expect(linkElement).toBeInTheDocument();
      });
    });
  });

  describe('Comportamento', () => {
    beforeEach(() => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
      });
      useCurrentPageContextMock.mockReturnValue({
        currentPage: InternalRoutes.Home,
        handleCurrentPage: handleCurrentPageMock,
      });
      act(() => {
        component = render(<Footer />);
      });
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

    test('Deve chamar o handleCurrentPageMock com a rota Settings QUANDO estiver outra página e clicar no Settings', () => {
      fireEvent.click(component.getByText(/Settings/i));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(
        InternalRoutes.Settings,
      );
    });

    test('Deve chamar o handleCurrentPageMock com a rota home QUANDO estiver outra página e clicar no Home', () => {
      useCurrentPageContextMock.mockReturnValueOnce({
        currentPage: InternalRoutes.About,
        handleCurrentPage: handleCurrentPageMock,
      });
      component.rerender(<Footer />);
      fireEvent.click(component.getByText(/Home/i));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(InternalRoutes.Home);
    });
  });
});
