import React from 'react';
import {render, screen, waitFor, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import {WebRoutes} from './webRoutes';
import routes from 'resources/routes';
import {createBrowserRouter} from 'react-router-dom';

const createBrowserRouterMock = createBrowserRouter as jest.Mock;
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    json: jest.fn().mockImplementation(actual.json),
    createBrowserRouter: jest
      .fn()
      .mockImplementation(actual.createBrowserRouter),
  };
});

describe('WebRoutes', () => {
  const basename = '/portifolio-web';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Inicialização', () => {
    beforeEach(
      async () =>
        await act(async () => {
          window.history.pushState({}, '', `${basename}${routes.Home}`);
          render(<WebRoutes />);
        }),
    );

    test('DEVE criar o router com createBrowserRouter', async () => {
      expect(createBrowserRouterMock).toHaveBeenCalledWith(
        expect.any(Array),
        expect.objectContaining({basename}),
      );
    });

    test('Deve renderizar o layout page', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('layout-page')).toBeInTheDocument();
      });
    });
  });

  describe('HomePage', () => {
    test(`Deve renderizar a página Home na rota ${routes.Home}`, async () => {
      await act(async () => {
        window.history.pushState({}, '', `${basename}${routes.Home}`);
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-home-page')).toBeInTheDocument();
      });
    });
  });

  describe('ProjectsPage', () => {
    test(`Deve renderizar a página Projects na rota ${routes.Projects}`, async () => {
      await act(async () => {
        window.history.pushState({}, '', `${basename}${routes.Projects}`);
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-projects-page')).toBeInTheDocument();
      });
    });
  });

  describe('AboutPage', () => {
    test(`Deve renderizar a página About na rota ${routes.About}`, async () => {
      await act(async () => {
        window.history.pushState({}, '', `${basename}${routes.About}`);
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-about-page')).toBeInTheDocument();
      });
    });
  });

  describe('NotFoundPage', () => {
    test('Deve renderizar a página NotFound para rotas inexistentes', async () => {
      await act(async () => {
        window.history.pushState({}, '', `${basename}/non-existent-route`);
        render(<WebRoutes />);
      });

      await waitFor(() => {
        expect(screen.getByTestId('test-notFound-page')).toBeInTheDocument();
      });
    });
  });
});
