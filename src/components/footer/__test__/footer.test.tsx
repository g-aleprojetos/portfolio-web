import React, {act} from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useBackgroundContext} from 'context/background';
import {useLocation} from 'react-router-dom';
import {Footer} from '../footer';

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
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

describe('Footer', () => {
  let component: RenderResult;
  const handleToggleMock = jest.fn();

  describe('Renderização', () => {
    beforeEach(() => {
      useBackgroundContextMock.mockReturnValue({
        handleToggle: handleToggleMock,
        themeDark: false,
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
    });

    test('Deve mudar a rota para Home ao clicar no ícone de Home.', () => {
      useLocationMock.mockReturnValue({pathname: '/projects'});
      const {getByTestId} = render(<Footer />);

      const homeLink = getByTestId('test-image-icon-home');

      fireEvent.click(homeLink);

      expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    });

    test('Deve mudar a rota para Projects ao clicar no ícone de Projects.', () => {
      const {getByTestId} = render(<Footer />);
      const projectsLink = getByTestId('test-image-icon-projects');

      fireEvent.click(projectsLink);

      expect(projectsLink.closest('a')).toHaveAttribute('href', '/projects');
    });

    test('Deve mudar a rota para About ao clicar no ícone de About.', () => {
      const {getByTestId} = render(<Footer />);
      const aboutLink = getByTestId('test-image-icon-about');

      fireEvent.click(aboutLink);

      expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    });

    test('Deve mudar a rota para Settings ao clicar no ícone de Settings.', () => {
      const {getByTestId} = render(<Footer />);
      const settingsLink = getByTestId('test-image-icon-settings');

      fireEvent.click(settingsLink);

      expect(settingsLink.closest('a')).toHaveAttribute('href', '/settings');
    });
  });
});
