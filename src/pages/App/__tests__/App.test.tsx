import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useTranslation} from 'react-i18next';
import {useBackgroundContext} from 'context/background';
import {App} from '../App';

jest.mock('context/background', () => ({
  useBackgroundContext: jest.fn(),
}));

const useBackgroundContextMock = useBackgroundContext as jest.Mock;

const handleToggleMock = jest.fn();

useBackgroundContextMock.mockReturnValue({
  handleToggle: handleToggleMock,
  themeDark: false,
});

describe('App', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<App />);
  });

  describe('Renderização', () => {
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

    test('Deve renderizar o link do React', () => {
      const linkElement = component.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o ToggleSwitch', () => {
      const toggleSwitch = component.getByTestId('toggleSwitch');
      expect(toggleSwitch).toBeInTheDocument();
    });

    test('Deve renderizar o logo', () => {
      const logo = component.getByTestId('image-logo');
      expect(logo).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
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
