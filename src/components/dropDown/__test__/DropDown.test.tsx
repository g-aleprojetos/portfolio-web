import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useTranslation} from 'react-i18next';
import {languages} from 'utils/i18n/i18n.constants';
import {Dropdown} from '../DropDown';
import {colors} from 'resources/colors';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

const useTranslationMock = useTranslation as jest.Mock;

describe('Dropdown', () => {
  beforeEach(() => {
    useTranslationMock.mockReturnValue({
      t: (key: string) => key,
      i18n: {
        changeLanguage: jest.fn(),
        resolvedLanguage: 'pt',
      },
    });
  });

  const setup = () => render(<Dropdown />);

  describe('Renderização', () => {
    test('Deve renderizar o texto inicial correto', () => {
      setup();
      const selectedText = screen.getByTestId('dropdown-select');
      expect(selectedText).toHaveTextContent('portuguese');
    });

    test('Deve renderizar as opções de idioma no menu', () => {
      setup();
      fireEvent.click(screen.getByTestId('dropdown-select'));

      const brasilFlags = screen.getAllByTestId('idioma-portugues');
      expect(brasilFlags.length).toBeGreaterThan(0);

      const euaFlags = screen.getAllByTestId('idioma-ingles');
      expect(euaFlags.length).toBeGreaterThan(0);

      const francaFlags = screen.getAllByTestId('idioma-frances');
      expect(francaFlags.length).toBeGreaterThan(0);
    });

    test('Deve mostrar o ícone correto quando o dropdown está aberto', () => {
      setup();
      fireEvent.click(screen.getByTestId('dropdown-select'));

      const brasilFlags = screen.getAllByAltText(/altFlagBrazil/i);
      expect(brasilFlags.length).toBeGreaterThan(0);

      const euaFlags = screen.getAllByAltText(/altFlagEUA/i);
      expect(euaFlags.length).toBeGreaterThan(0);

      const francaFlags = screen.getAllByAltText(/altFlagFrance/i);
      expect(francaFlags.length).toBeGreaterThan(0);
    });
  });

  describe('Comportamento', () => {
    test('Deve alternar o dropdown ao clicar', () => {
      setup();
      const dropdown = screen.getByTestId('dropdown-select');

      expect(screen.queryByTestId('dropdown-menu')).toHaveStyle(
        'display: none',
      );

      fireEvent.click(dropdown);
      expect(screen.queryByTestId('dropdown-menu')).toHaveStyle(
        'display: block',
      );

      fireEvent.click(dropdown);
      expect(screen.queryByTestId('dropdown-menu')).toHaveStyle(
        'display: none',
      );
    });

    test('Deve mudar o idioma quando uma opção é selecionada', () => {
      setup();
      const dropdown = screen.getByTestId('dropdown-select');
      fireEvent.click(dropdown);

      const idiomaFrances = screen.getByTestId('idioma-frances');
      fireEvent.click(idiomaFrances);

      expect(useTranslationMock().i18n.changeLanguage).toHaveBeenCalledWith(
        languages.fr,
      );
    });

    test('Deve destacar a opção selecionada', () => {
      setup();
      const dropdown = screen.getByTestId('dropdown-select');
      fireEvent.click(dropdown);

      const idiomaIngles = screen.getByTestId('idioma-ingles');
      fireEvent.click(idiomaIngles);

      expect(idiomaIngles.parentElement).toHaveStyle(`
        background: ${colors.gunmetal}
      `);
    });
    describe('Dropdown - Resolved Language', () => {
      test('Deve renderizar o idioma inglês como opção selecionada quando resolvedLanguage é "en"', () => {
        useTranslationMock.mockReturnValue({
          t: (key: string) => key,
          i18n: {
            changeLanguage: jest.fn(),
            resolvedLanguage: 'en',
          },
        });

        setup();

        const selectedText = screen.getByTestId('dropdown-select');
        expect(selectedText).toHaveTextContent('english');
      });

      test('Deve renderizar o idioma francês como opção selecionada quando resolvedLanguage é "fr"', () => {
        useTranslationMock.mockReturnValue({
          t: (key: string) => key,
          i18n: {
            changeLanguage: jest.fn(),
            resolvedLanguage: 'fr',
          },
        });

        setup();

        const selectedText = screen.getByTestId('dropdown-select');
        expect(selectedText).toHaveTextContent('french');
      });

      test('Deve retornar null quando resolvedLanguage não corresponde a "pt", "en", ou "fr"', () => {
        useTranslationMock.mockReturnValue({
          t: (key: string) => key,
          i18n: {
            changeLanguage: jest.fn(),
            resolvedLanguage: 'de',
          },
        });

        setup();

        const selectedText = screen.getByTestId('dropdown-select');
        expect(selectedText).toHaveTextContent('select');
      });
    });
  });
});
