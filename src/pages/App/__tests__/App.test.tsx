import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
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
  const setup = () => render(<App />);

  describe('Renderização', () => {
    test('Deve renderizar o texto "Pagina Inicial".', () => {
      setup();
      const linkElement = screen.getByText(/Home/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "Conteudo".', () => {
      setup();
      const linkElement = screen.getByText(/Contents/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "sobre".', () => {
      setup();
      const linkElement = screen.getByText(/About Us/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o link do React', () => {
      setup();
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o ToggleSwitch', () => {
      setup();
      const toggleSwitch = screen.getByTestId('toggleSwitch');
      expect(toggleSwitch).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
    test('Deve mudar o texto de "Home" para "Pagina Inicial" quando clicar no botão "Português"', () => {
      setup();
      const botao = screen.getByText(/Português/i);

      fireEvent.click(botao);

      const paginaInicial = screen.getByText(/Pagina Inicial/i);
      expect(paginaInicial).toBeDefined();
    });

    test('Deve mudar o texto de "Contents" para "Conteúdo" quando clicar no botão "Português"', () => {
      setup();
      const botao = screen.getByText(/Português/i);

      fireEvent.click(botao);

      const paginaInicial = screen.getByText(/Conteúdo/i);
      expect(paginaInicial).toBeDefined();
    });

    test('Deve mudar o texto de "About Us" para "Sobre" quando clicar no botão "Português"', () => {
      setup();
      const botao = screen.getByText(/Português/i);

      fireEvent.click(botao);

      const paginaInicial = screen.getByText(/Sobre/i);
      expect(paginaInicial).toBeDefined();
    });

    test('Deve voltar para o texto de "Home" quando clicar no botão "Português" e depois "English"', () => {
      setup();
      const botaoPortugues = screen.getByText(/Português/i);
      fireEvent.click(botaoPortugues);

      const botaoEnglish = screen.getByText(/English/i);
      fireEvent.click(botaoEnglish);
      const paginaInicial = screen.getByText(/Home/i);
      expect(paginaInicial).toBeDefined();
    });

    test('Deve chamar handleToggle quando o ToggleSwitch é clicado', () => {
      setup();
      const toggleSwitch = screen.getByRole('checkbox');
      fireEvent.click(toggleSwitch);
      expect(handleToggleMock).toHaveBeenCalledTimes(1);
    });

    test('Deve definir data-escolhido como true no botão "Português" quando o idioma é "pt"', () => {
      setup();
      const botaoPortugues = screen.getByText(/Português/i);
      fireEvent.click(botaoPortugues);
      expect(botaoPortugues).toHaveAttribute('data-escolhido', 'true');
    });

    test('Deve definir data-escolhido como true no botão "English" quando o idioma é "en"', () => {
      setup();
      const botaoPortugues = screen.getByText(/Português/i);
      fireEvent.click(botaoPortugues);
      const botaoEnglish = screen.getByText(/English/i);
      fireEvent.click(botaoEnglish);
      expect(botaoEnglish).toHaveAttribute('data-escolhido', 'true');
    });
  });
});
