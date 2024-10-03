import React from 'react';
import {render, screen, waitFor, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import {WebRoutes} from './webRoutes';
import {useCurrentPageContext} from 'context/routesContext';
import {InternalRoutes} from 'resources/enun/InternalRoutes';

jest.mock('context/routesContext', () => ({
  useCurrentPageContext: jest.fn(),
}));

const useCurrentPageContextMock = useCurrentPageContext as jest.Mock;
describe('WebRoutes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Inicialização', () => {
    beforeEach(
      async () =>
        await act(async () => {
          useCurrentPageContextMock.mockReturnValue({
            currentPage: InternalRoutes.Home,
            handleCurrentPage: jest.fn(),
          });
          render(<WebRoutes />);
        }),
    );

    test('Deve renderizar o layout page', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('layout-page')).toBeInTheDocument();
      });
    });
  });

  describe('HomePage', () => {
    test(`Deve renderizar a página Home na rota ${InternalRoutes.Home}`, async () => {
      await act(async () => {
        useCurrentPageContextMock.mockReturnValue({
          currentPage: InternalRoutes.Home,
          handleCurrentPage: jest.fn(),
        });
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-home-page')).toBeInTheDocument();
      });
    });
  });

  describe('ProjectsPage', () => {
    test(`Deve renderizar a página Projects na rota ${InternalRoutes.Projects}`, async () => {
      await act(async () => {
        useCurrentPageContextMock.mockReturnValue({
          currentPage: InternalRoutes.Projects,
          handleCurrentPage: jest.fn(),
        });
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-projects-page')).toBeInTheDocument();
      });
    });
  });

  describe('AboutPage', () => {
    test(`Deve renderizar a página About na rota ${InternalRoutes.About}`, async () => {
      await act(async () => {
        useCurrentPageContextMock.mockReturnValue({
          currentPage: InternalRoutes.About,
          handleCurrentPage: jest.fn(),
        });
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-about-page')).toBeInTheDocument();
      });
    });
  });

  describe('ConfigurationPage', () => {
    test(`Deve renderizar a página About na rota ${InternalRoutes.Settings}`, async () => {
      await act(async () => {
        useCurrentPageContextMock.mockReturnValue({
          currentPage: InternalRoutes.Settings,
          handleCurrentPage: jest.fn(),
        });
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(
          screen.getByTestId('test-configuration-page'),
        ).toBeInTheDocument();
      });
    });
  });

  describe('NotFoundPage', () => {
    test('Deve renderizar a página NotFound para rotas inexistentes', async () => {
      await act(async () => {
        useCurrentPageContextMock.mockReturnValue({
          currentPage: 'rota-inexistente',
          handleCurrentPage: jest.fn(),
        });
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-notFound-page')).toBeInTheDocument();
      });
    });
  });
});
