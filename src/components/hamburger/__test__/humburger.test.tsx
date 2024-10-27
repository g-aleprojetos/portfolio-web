import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Hamburger} from '../hamburger';

describe('Hamburger', () => {
  const aoClicarMock = jest.fn();
  const setup = () => render(<Hamburger mudarEstado={aoClicarMock} />);

  describe('Renderização', () => {
    test(`DEVE renderizar o componente Hamburger`, () => {
      setup();
      const hamburguer = screen.getByTestId('test_hamburger');
      expect(hamburguer).toBeDefined();
    });
  });
  describe('Comportamento', () => {
    test('DEVE chamar a função QUANDO clicar no hamburger', () => {
      setup();
      const hamburguer = screen.getByTestId('test_hamburger');

      fireEvent.click(hamburguer);

      expect(aoClicarMock).toBeCalled();
    });
  });
});
