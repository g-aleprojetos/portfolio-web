import React, {act} from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Sidebar} from '../sidebar';
import {useCurrentPageContext} from 'context/routesContext';
import {InternalRoutes} from 'resources/enun/InternalRoutes';

jest.mock('context/routesContext', () => ({
  useCurrentPageContext: jest.fn(),
}));

const useCurrentPageContextMock = useCurrentPageContext as jest.Mock;

describe('Sidebar', () => {
  let component: RenderResult;
  const handleCurrentPageMock = jest.fn();

  describe('Renderização', () => {
    beforeEach(() => {
      useCurrentPageContextMock.mockReturnValue({
        currentPage: InternalRoutes.Home,
        handleCurrentPage: handleCurrentPageMock,
      });
      act(() => {
        component = render(<Sidebar />);
      });
    });
    test(`DEVE renderizar o sidebar`, () => {
      const tree = component.getByTestId('sidebar');
      expect(tree).toBeDefined();
    });

    test('Deve renderizar botão Hamburguer.', () => {
      const linkElement = component.getByTestId('test_hamburger');
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o Imagem Home.', () => {
      const linkElement = component.getByTestId('test-image-icon-home');
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o Imagem Projects.', () => {
      const linkElement = component.getByTestId('test-image-icon-projects');
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o Imagem About.', () => {
      const linkElement = component.getByTestId('test-image-icon-about');
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o Imagem Settings.', () => {
      const linkElement = component.getByTestId('test-image-icon-settings');
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
    beforeEach(() => {
      useCurrentPageContextMock.mockReturnValue({
        currentPage: InternalRoutes.Home,
        handleCurrentPage: handleCurrentPageMock,
      });
      act(() => {
        component = render(<Sidebar />);
      });

      act(() => {
        fireEvent.click(component.getByTestId('test_hamburger'));
      });
    });

    test('Deve renderizar o texto Home.', () => {
      const linkElement = component.getByText(/Home/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto Projects.', () => {
      const linkElement = component.getByText(/Projects/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto About.', () => {
      const linkElement = component.getByText(/About Us/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto Settings.', () => {
      const linkElement = component.getByText(/Settings/i);
      expect(linkElement).toBeInTheDocument();
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
      component.rerender(<Sidebar />);
      fireEvent.click(component.getByText(/Home/i));
      expect(handleCurrentPageMock).toHaveBeenCalledWith(InternalRoutes.Home);
    });
  });
});
