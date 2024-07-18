import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {useBackgroundContext} from 'context/background';
import {ToggleSwitch} from '../ToggleSwitch';

jest.mock('context/background', () => ({
  useBackgroundContext: jest.fn(),
}));

const useBackgroundContextMock = useBackgroundContext as jest.Mock;

useBackgroundContextMock.mockReturnValue({
  handleToggle: jest.fn(),
  themeDark: false,
});

describe('ToggleSwitch', () => {
  const setup = (isOn = false, handleOnclick = jest.fn()) =>
    render(<ToggleSwitch isOn={isOn} handleOnclick={handleOnclick} />);

  describe('Renderização', () => {
    test('Deve renderizar o ToggleSwitch', () => {
      setup();
      const element = screen.getByTestId('toggleSwitch');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Comportamento', () => {
    test('Deve estar desativado inicialmente', () => {
      setup();
      const input = screen.getByRole('checkbox');
      expect(input).not.toBeChecked();
    });

    test('Deve estar ativado quando isOn é true', () => {
      setup(true);
      const input = screen.getByRole('checkbox');
      expect(input).toBeChecked();
    });

    test('Deve chamar handleOnclick quando clicado', () => {
      const handleOnclick = jest.fn();
      setup(false, handleOnclick);
      const input = screen.getByRole('checkbox');
      fireEvent.click(input);
      expect(handleOnclick).toHaveBeenCalledTimes(1);
    });

    test('Deve adicionar classe "checked" quando isOn é true', () => {
      setup(true);
      const span = screen.getByTestId('toggleSwitch').querySelector('span');
      expect(span).toHaveClass('checked');
    });

    test('Não deve adicionar classe "checked" quando isOn é false', () => {
      setup(false);
      const span = screen.getByTestId('toggleSwitch').querySelector('span');
      expect(span).not.toHaveClass('checked');
    });
  });
});
